<?php

$app->group('/authentication/', function () {
    $this->post('login/', 'App\Controller\Authentication:login');
});
