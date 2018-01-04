<?php

$app->group('/contacts/', function () {
    $this->get('[{id}]', 'App\Controller\Contact');
    $this->post('', 'App\Controller\Contact');
    $this->put('{id}', 'App\Controller\Contact');
    $this->delete('{id}', 'App\Controller\Contact');
});
