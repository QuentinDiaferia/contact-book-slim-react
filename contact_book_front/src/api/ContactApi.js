import axios from 'axios';
import store from '../store';

import {
    getContactsSuccess,
    getContactSuccess,
    addContact,
    deleteContact,
    editContact
} from '../actions/ContactActions';

const API_CONTACTS_URL = API_URL + 'contacts/';
//const API_CONTACTS_URL = 'http://localhost/dev-local/contact_book/contact_book_back/public/contacts/';

export default class ContactApi {

    static getContacts() {
        return axios.get(API_CONTACTS_URL)
            .then(response => {
                store.dispatch(getContactsSuccess(response.data))
                return response.data;
            });
    }

    static getContact(id) {
        return axios.get(API_CONTACTS_URL + id)
            .then(response => {
                store.dispatch(getContactSuccess(response.data))
                return response.data;
            });
    }

    static addContact(contact) {
        return axios.post(API_CONTACTS_URL, contact)
            .then(response => {
                store.dispatch(addContact(response.data))
                return response.data;
            });
    }

    static deleteContact(id) {
        return axios.delete(API_CONTACTS_URL + id)
            .then(response => {
                store.dispatch(deleteContact(id))
                return response;
            });
    }

    static editContact(contact) {
        return axios.put(API_CONTACTS_URL + contact.id, contact)
            .then(response => {
                store.dispatch(editContact(response.data))
                return response.data;
            });
    }
}

