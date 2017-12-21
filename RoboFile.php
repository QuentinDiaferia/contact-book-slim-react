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
