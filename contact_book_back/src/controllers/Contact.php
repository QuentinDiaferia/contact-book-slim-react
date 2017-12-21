<?php
namespace App\Controller;

// @TODO error handling, validation
class Contact extends Base
{
    public function getAll($request, $response, $args)
    {
        $contacts = $this->db->query('SELECT * FROM contacts');
        $res = [];
        while ($row = $contacts->fetch()) {
            $res[] = [
                'id' => $row['id'],
                'name' => $row['name'],
                'phone' => $row['phone'],
            ];
        }
        return $response->withJson($res);
    }

    public function getOne($request, $response, $args)
    {
        $contact = $this->db->prepare('SELECT * FROM contacts WHERE id = :id');
        $contact->execute([
            'id' => $args['id']
        ]);
        
        if ($json = $contact->fetch()) {
            return $response->withJson($json);
        } else {
            return $response->withStatus(404);
        }
    }

    //@TODO get with optional ID
    public function get($request, $response, $args)
    {

    }

    public function add($request, $response, $args)
    {
        $data = $request->getParsedBody();
        $contact = $this->db->prepare('INSERT INTO contacts (name, phone) VALUES (:name, :phone)');

        $contact->execute([
            'name' => $data['name'],
            'phone' => $data['phone'],
        ]);
        return $response
            ->withStatus(201)
            ->withJson([
            'id' => $this->db->lastInsertId(),
            'name' => $data['name'],
            'phone' => $data['phone'],
        ]);
    }

    public function edit($request, $response, $args)
    {
        $data = $request->getParsedBody();
        $contact = $this->db->prepare('UPDATE contacts SET name = :name, phone = :phone WHERE id = :id');
        $contact->execute([
            'name' => $data['name'],
            'phone' => $data['phone'],
            'id' => $args['id'],
        ]);
        if ($contact->rowCount() > 0) {
            return $response->withJson([
                'id' => $args['id'],
                'name' => $data['name'],
                'phone' => $data['phone'],
            ]);
        } else {
            return $response->withStatus(404);
        }
    }

    public function delete($request, $response, $args)
    {
        $data = $request->getParsedBody();
        $contact = $this->db->prepare('DELETE FROM contacts WHERE id = :id');
        $contact->execute([
            'id' => $args['id'],
        ]);
        return $response->withJson([]);
    }
}
