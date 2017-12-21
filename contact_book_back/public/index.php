<?php

use Slim\App;

require '../vendor/autoload.php';

$settings = require '../config/config.php';
$app = new App($settings);

require '../config/dependencies.php';

require '../src/middlewares/cors.php';

require '../src/routes/contacts.php';

$app->run();
