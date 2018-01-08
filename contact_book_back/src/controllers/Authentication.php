<?php
namespace App\Controller;

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use App\Model\User;

class Authentication extends \App\Core\Base
{
    public function login(Request $request, Response $response) : Response
    {
        $data = $request->getParsedBody();
        $user = User::where('email', $data['email'])->first();

        if (!$user || !password_verify($data['password'], $user->password)) {
            return $response->withStatus(422)->withJson([
                'error' => 'Login error'
            ]);
        }

        return $response->withJson([
            'id' => $user->getKey(),
            'email' => $user->email,
        ]);

        return $response;
    }
}
