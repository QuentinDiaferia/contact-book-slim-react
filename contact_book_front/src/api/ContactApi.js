import axios from 'axios';
import store from '../store';

import {
    getContactsSuccess,
    getContactSuccess,
    addContact,
    deleteContact,
    editContact
} from '../actions/ContactActions';

const API_PATH = 'http://localhost/dev-local/contact_book/contact_book_back/public/contacts/';

export default class ContactApi {

    static getContacts() {
        return axios.get(API_PATH)
            .then(response => {
                store.dispatch(getContactsSuccess(response.data))
                return response.data;
            });
    }

    static getContact(id) {
        return axios.get(API_PATH + id)
            .then(response => {
                store.dispatch(getContactSuccess(response.data))
                return response.data;
            });
    }

    static addContact(contact) {
        return axios.post(API_PATH, contact)
            .then(response => {
                store.dispatch(addContact(response.data))
                return response.data;
            });
    }

    static deleteContact(id) {
        return axios.delete(API_PATH + id)
            .then(response => {
                store.dispatch(deleteContact(id))
                return response;
            });
    }

    static editContact(contact) {
        return axios.put(API_PATH + contact.id, contact)
            .then(response => {
                store.dispatch(editContact(response.data))
                return response.data;
            });
    }
}

