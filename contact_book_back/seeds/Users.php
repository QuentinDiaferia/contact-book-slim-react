<?php

use Phinx\Seed\AbstractSeed;

class Users extends AbstractSeed
{
    public function run()
    {
        $users = [
            [
                'id' => null,
                'email' => 'user@user.fr',
                'password' => password_hash('test', PASSWORD_BCRYPT, ['cost' => 12]),
            ],
        ];
        $this->table('users')
            ->insert($users)
            ->save();
    }
}
