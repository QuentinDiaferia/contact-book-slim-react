import axios from 'axios'
import store from 'store'

import { login } from 'actions/SessionActions'

const API_AUTH_URL = API_URL + 'authentication/'

export default class SessionApi {

    static login() {
        return axios.get(API_AUTH_URL)
            .then(response => {
                store.dispatch(login(response.data))
                return response.data
            });
    }
}

