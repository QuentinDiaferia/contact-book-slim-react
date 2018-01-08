<?php
namespace App\Controller;

use App\Model\Contact as ContactModel;

// @TODO error handling, validation
class Contact extends \App\Core\Crud
{
    protected $modelClass = 'App\Model\Contact';

    protected function save($entity, $data) {
        $entity->name = $data['name'];
        $entity->phone = $data['phone'];
        $entity->save();
    }

    protected function prepareReturnData($data)
    {  
        return [
            'id' => $data->id,
            'name' => $data->name ?? '',
            'phone' => $data->phone ?? '',
        ];
    }
}
