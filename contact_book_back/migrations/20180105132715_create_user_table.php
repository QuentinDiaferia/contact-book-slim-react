<?php

use Phinx\Migration\AbstractMigration;

class CreateUserTable extends AbstractMigration
{
    public function change()
    {
        $table = $this->table('users');
        $table->addColumn('email', 'string', array(
            'limit' => 255
        ))
        ->addColumn('password', 'string', array(
            'limit' => 255
        ))
        ->create();
    }
}
