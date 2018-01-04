<?php

use App\Controller\Contact;

$app->group('/contacts/', function () use ($app) {

    $controller = new Contact($app);

    $this->get('[{id}]', function ($request, $response, $args) use ($controller) {
        return $controller->get($request, $response, $args);
    });

    $this->post('', function ($request, $response, $args) use ($controller) {
        return $controller->add($request, $response, $args);
    });

    $this->put('{id}', function ($request, $response, $args) use ($controller) {
        return $controller->edit($request, $response, $args);
    });

    $this->delete('{id}', function ($request, $response, $args) use ($controller) {
        return $controller->delete($request, $response, $args);
    });

});


