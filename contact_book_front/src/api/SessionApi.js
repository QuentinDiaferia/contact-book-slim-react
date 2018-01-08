import axios from 'axios'
import store from 'store'

import { loginSuccess, loginFailure, logout } from 'actions/SessionActions'

const API_AUTH_URL = API_URL + 'authentication/'

export default class SessionApi {

    static login(email, password) {
        return axios.post(API_AUTH_URL + 'login/', {
            email,
            password
        }).then(response => {
            store.dispatch(loginSuccess(response.data))
            return response.data
        }, error => {
            store.dispatch(loginFailure(error.response.data))
            return error.response.data
        });
    }

    static logout() {
        store.dispatch(logout())
    }
}
