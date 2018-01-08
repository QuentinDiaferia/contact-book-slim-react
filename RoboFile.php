<?php

use Globalis\Robo\Core\Command;

class RoboFile extends \Globalis\Robo\Tasks
{
    private $configDirectory = __DIR__ . '/.robo/config/';

    private $buildDirectories = [
        'back' => __DIR__ . '/.robo/build/back',
        'front' => __DIR__ . '/.robo/build/front',
    ];

    private $backAppPath =  __DIR__ . '/contact_book_back';

    private $frontAppPath =  __DIR__ . '/contact_book_front';

    /**
     * Install App
     */
    public function install()
    {
        $this->loadConfig();
        $this->buildBackApp();
        $this->buildFrontApp();
        $this->installBackDependencies();
        $this->installFrontDependencies();
    }

    /**
     * Configure App
     */
    public function config()
    {
        $this->configVariables = $this->taskConfiguration()
            ->initConfig($this->getProperties('config'))
            ->configFilePath($this->configDirectory . 'my.config')
            ->force(true)
            ->run()
            ->getData();
        $this->install();
    }

    /**
     * Start watching on asset and source files
     */
    public function watch()
    {
        $this->loadConfig();
        $this->taskExec($this->configVariables['NPM_PATH'].' run watch')
            ->dir($this->frontAppPath)
            ->run();
    }

    /**
     * Create migration
     *
     * @param string $name Migration name (CamelCase)
     */
    public function migrateCreate($name)
    {
        $name = explode(' ', str_replace(['_', '-'], ' ', $name));
        foreach ($name as &$word) {
            $word = mb_strtoupper(mb_substr($word, 0, 1)) . mb_substr($word, 1);
        }
        $name = implode('', $name);

        $this->taskExec('vendor/bin/phinx')
            ->dir($this->backAppPath)
            ->arg('create')
            ->arg($name)
            ->run();
    }

    /**
     * Database migrate
     */
    public function migrateUp()
    {
        $this->taskExec('vendor/bin/phinx')
            ->dir($this->backAppPath)
            ->arg('migrate')
            ->run();
    }

    /**
     * Migration rollback
     */
    public function migrateDown()
    {
        $this->taskExec('vendor/bin/phinx')
            ->dir($this->backAppPath)
            ->arg('rollback')
            ->run();
    }

    /**
     * Create seed file
     *
     * @param string $name Seed name (CamelCase)
     */
    public function seedCreate($name)
    {
        $this->taskExec('vendor/bin/phinx')
            ->dir($this->backAppPath)
            ->arg('seed:create')
            ->arg($name)
            ->run();
    }

    /**
     * Run seeds
     *
     * @param string $name Seed name (CamelCase)
     */
    public function seedRun($name = null)
    {
        $task = $this->taskExec('vendor/bin/phinx')
            ->dir($this->backAppPath)
            ->arg('seed:run');
        if ($name) {
            $task->option('-s ' . $name);
        }
        $task->run();
    }



    private function buildBackApp()
    {
        $this->taskCopyReplaceDir([$this->buildDirectories['back'] => $this->backAppPath])
            ->from(array_keys($this->configVariables))
            ->to($this->configVariables)
            ->startDelimiter('<##')
            ->endDelimiter('##>')
            ->dirPermissions(0755)
            ->filePermissions(0644)
            ->run();
        $this->migrateUp();
    }

    private function buildFrontApp()
    {
        $this->taskCopyReplaceDir([$this->buildDirectories['front'] => $this->frontAppPath])
            ->from(array_keys($this->configVariables))
            ->to($this->configVariables)
            ->startDelimiter('<##')
            ->endDelimiter('##>')
            ->dirPermissions(0755)
            ->filePermissions(0644)
            ->run();
    }

    private function installBackDependencies()
    {
        $this->taskComposerInstall()
            ->workingDir($this->backAppPath)
            ->preferDist()
            ->run();
    }

    private function installFrontDependencies()
    {
        $this->taskNpmInstall($this->configVariables['NPM_PATH'])
            ->dir($this->frontAppPath)
            ->run();
    }

    private function loadConfig()
    {
        $this->configVariables = $this->taskConfiguration()
            ->initConfig($this->getProperties('config'))
            ->configFilePath($this->configDirectory . 'my.config')
            ->run()
            ->getData();
    }

    private function getProperties($type)
    {
        if (!isset($this->properties)) {
            $this->properties = include $this->configDirectory . 'properties.php';
        }
        return $this->properties[$type];
    }
}
