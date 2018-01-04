<?php

$container = $app->getContainer();

$container['db'] = function ($container) {
    $settings = $container['settings']['db'];
    $capsule = new \Illuminate\Database\Capsule\Manager;
    $capsule->addConnection($settings);
    $capsule->setAsGlobal();
    $capsule->bootEloquent();
    return $capsule;
}

?>
