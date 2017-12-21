<?php
namespace App\Controller;

use Slim\App;

abstract class Base
{
    protected $app;
    protected $db;

    public function __construct(App $app)
    {
        $this->app = $app;
        $this->db = $app->getContainer()->get('db');
    }
}
