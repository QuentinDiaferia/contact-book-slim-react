import axios from 'axios'
import store from 'store'

const API_CONTACTS_URL = API_URL + 'contacts/'

export default class Contact {

    static getContacts() {
        return axios.get(API_CONTACTS_URL)
            .then(response => {
                store.dispatch({
                    type: 'GET_CONTACTS_SUCCESS',
                    contacts: response.data
                })
                return response.data;
            })
    }

    static getContact(id) {
        return axios.get(API_CONTACTS_URL + id)
            .then(response => {
                store.dispatch({
                    type: 'GET_CONTACT_SUCCESS',
                    contact: response.data
                })
                return response.data;
            })
    }

    static addContact(contact) {
        return axios.post(API_CONTACTS_URL, contact)
            .then(response => {
                store.dispatch({
                    type: 'ADD_CONTACT',
                    contact: response.data
                })
                return response.data;
            })
    }

    static deleteContact(id) {
        return axios.delete(API_CONTACTS_URL + id)
            .then(response => {
                store.dispatch({
                    type: 'DELETE_CONTACT',
                    id
                })
                return response;
            })
    }

    static editContact(contact) {
        return axios.put(API_CONTACTS_URL + contact.id, contact)
            .then(response => {
                store.dispatch({
                    type: 'EDIT_CONTACT',
                    contact: response.data
                })
                return response.data;
            })
    }
}
