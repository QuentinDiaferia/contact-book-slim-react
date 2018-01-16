import store from 'store'

export default class Flash {

    static add(message, type) {
        const flashData = {
            message,
            type
        }
        store.dispatch({
            type: 'ADD_FLASH',
            flashData
        })
    }

    static empty() {
        store.dispatch({
            type: 'EMPTY_FLASH'
        })
    }
}
