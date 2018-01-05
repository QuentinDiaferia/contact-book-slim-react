<?php
namespace App\Core;

use Interop\Container\ContainerInterface;

abstract class Base
{
    protected $db;

    public function __construct(ContainerInterface $container) {
        $this->db = $container->get('db');
    }
}
