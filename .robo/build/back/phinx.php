<?php

return [
    'paths' => [
        'migrations' => 'migrations',
        'seeds' => 'seeds',
    ],
    'environments' => [
        'default_migration_table' => 'phinxlog',
        'default_database' => 'database',
        'database' => [
            'adapter' => 'mysql',
            'host' => '<##DB_HOST##>',
            'name' => '<##DB_NAME##>',
            'user' => '<##DB_USER##>',
            'pass' => '<##DB_PASSWORD##>',
            'port' => '<##DB_PORT##>',
            'charset' => 'utf8',
        ]
    ],
];
