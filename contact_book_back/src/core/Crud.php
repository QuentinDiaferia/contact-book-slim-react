<?php
namespace App\Core;

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Interop\Container\ContainerInterface;
use Slim\Exception\NotFoundException;

// @TODO error handling, validation
abstract class Crud extends Base
{
    protected $request;
    protected $response;
    protected $db;

    protected $modelClass;

    protected $entity;

    abstract protected function prepareReturnData($data);

    abstract protected function save($entity, $data);

    public function __invoke(Request $request, Response $response, $args) : Response
    {
        $method = $request->getMethod();
        $this->request = $request;
        $this->response = $response;

        $id = $args['id'] ?? null;

        if ($id && !$this->entity = $this->modelClass::find($id)) {
            return $this->response->withStatus(404);
        }

        switch ($method) {
            case 'GET':
                return $id ? $this->get() : $this->list();
                break;
            case 'POST':
                return $this->create();
                break;
            case 'PUT':
                return $this->update();
                break;
            case 'DELETE':
                return $this->delete();
                break;
            default:
                throw new NotFoundException($this->request, $this->response);
                break;
        }
    }

    private function list() : Response
    {
        $data = $this->modelClass::get()->all();
        return $this->response->withJson(
            $this->prepareReturnMultipleData($data)
        );
    }

    private function get() : Response
    {
        return $this->response->withJson(
            $this->prepareReturnData($this->entity)
        );
    }

    private function create() : Response
    {
        $item = new $this->modelClass();
        $data = $this->request->getParsedBody();

        $this->save($item, $data);

        return $this->response
            ->withStatus(201)
            ->withJson($this->prepareReturnData($item));
    }

    private function update() : Response
    {
        $data = $this->request->getParsedBody();
        $this->save($this->entity, $data);
        return $this->response->withJson(
            $this->prepareReturnData($this->entity)
        );
    }

    private function delete() : Response
    {
        $response = $this->response->withJson(
            $this->prepareReturnData($this->entity)
        );
        $this->entity->delete();
        return $response;
    }

    private function prepareReturnMultipleData($data)
    {
        $json = [];
        foreach ($data as $item) {
            $json[] = $this->prepareReturnData($item);
        }
        return $json;
    }
}
