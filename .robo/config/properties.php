<?php

$unix_username = exec('whoami');
$git_name      = exec('git config user.name');
$git_email     = exec('git config user.email');
$project_slug  = 'contact_book';

return [
    'config' => [
        'DB_NAME' => [
            'question' => 'Database name',
            'default' => $unix_username . '_' . $project_slug,
        ],
        'DB_USER' => [
            'question' => 'Database username',
            'default' => 'username',
        ],
        'DB_PASSWORD' => [
            'question' => 'Database password',
            'default' => 'password',
        ],
        'DB_HOST' => [
            'question' => 'Database host',
            'default' => 'localhost',
        ],
        'DB_PORT' => [
            'question' => 'Database port',
            'default' => 3306,
        ],

        'WEB_SCHEME' => [
            'question' => 'Site scheme',
            'choices' => ['http', 'https'],
            'default' => 'http',
        ],
        'API_HOST' => [
            'question' => 'Api host',
            'default' => 'example.com',
        ],
        'API_PATH' => [
            'question' => 'Api base path',
            'default' => '/'.$unix_username.'/'.$project_slug . '/'.$project_slug . '_back/public/',
            'empty' => true,
            'formater' => function ($value) {
                return '/' . ltrim($value, '/');
            }
        ],
        'BASE_PATH' => [
            'question' => 'Base path to index.html (with ending slash)',
            'default' => '/'.$unix_username.'/'.$project_slug . '/'.$project_slug . '_front/public/',
        ],
    ]
];
