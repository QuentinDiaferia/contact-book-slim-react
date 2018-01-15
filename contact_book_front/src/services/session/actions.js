import axios from 'axios'
import store from 'store'

const API_AUTH_URL = API_URL + 'authentication/'

export default class Session {

    static login(email, password) {
        return axios.post(API_AUTH_URL + 'login/', {
            email,
            password
        }).then(response => {
            store.dispatch({
                type: 'LOGIN_SUCCESS',
                data: response.data
            })
            return response.data
        }, error => {
            store.dispatch({
                type: 'LOGIN_FAILURE',
                data: response.data
            })
            return error.response.data
        });
    }

    static logout() {
        store.dispatch({
            type: 'LOGOUT'
        })
    }
}
