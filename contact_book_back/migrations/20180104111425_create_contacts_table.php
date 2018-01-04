<?php

use Phinx\Migration\AbstractMigration;

class CreateContactsTable extends AbstractMigration
{
    public function change()
    {
        $table = $this->table('contacts');
        $table->addColumn('name', 'string', array(
            'limit' => 100
        ))
        ->addColumn('phone', 'string', array(
            'limit' => 10
        ))
        ->create();
    }
}
