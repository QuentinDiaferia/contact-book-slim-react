export function getContactsSuccess(contacts) {
    return {
        type: 'GET_CONTACTS_SUCCESS',
        contacts
    }
}

export function getContactSuccess(contact) {
    return {
        type: 'GET_CONTACT_SUCCESS',
        contact
    }
}

export function addContact(contact) {
    return {
        type: 'ADD_CONTACT',
        contact
    }
}

export function deleteContact(id) {
    return {
        type: 'DELETE_CONTACT',
        id
    }
}

export function editContact(contact) {
    return {
        type: 'EDIT_CONTACT',
        contact
    }
}
