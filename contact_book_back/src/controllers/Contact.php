<?php
namespace App\Controller;

use App\Model\Contact as ContactModel;

// @TODO error handling, validation
class Contact extends Base
{
    public function get($request, $response, $args)
    {
        if (isset($args['id'])) {
            // Get one
            if ($contact = ContactModel::find($args['id'])) {
                return $response->withJson($this->prepareReturnData($contact));
            } else {
                return $response->withStatus(404);
            }
        } else {
            // Get all
            $contacts = ContactModel::get()->all();
            return $response->withJson($this->prepareReturnData($contacts));
        }
    }

    public function add($request, $response, $args)
    {
        $data = $request->getParsedBody();

        $contact = new ContactModel();
        $contact->name = $data['name'];
        $contact->phone = $data['phone'];
        $contact->save();

        return $response
            ->withStatus(201)
            ->withJson($this->prepareReturnData($contact));
    }

    public function edit($request, $response, $args)
    {
        $data = $request->getParsedBody();

        if ($contact = ContactModel::find($args['id'])) {
            $contact->name = $data['name'];
            $contact->phone = $data['phone'];
            $contact->save();
            return $response->withJson($this->prepareReturnData($contact));
        } else {
            return $response->withStatus(404);
        }
    }

    public function delete($request, $response, $args)
    {
        $data = $request->getParsedBody();

        if ($contact = ContactModel::find($args['id'])) {
            $contact->delete();
            return $response->withJson([]);
        } else {
            return $response->withStatus(404);
        }
    }

    private function prepareReturnData($data)
    {
        $json = [];
        if (!empty($data)) {
            if (is_array($data)) {
                foreach ($data as $item) {
                    $json[] = [
                        'id' => $item->id,
                        'name' => $item->name ?? '',
                        'phone' => $item->phone ?? '',
                    ];
                }
            } else {
                $json = [
                    'id' => $data->id,
                    'name' => $data->name ?? '',
                    'phone' => $data->phone ?? '',
                ];
            }
        }
        return $json;
    }
}
