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
