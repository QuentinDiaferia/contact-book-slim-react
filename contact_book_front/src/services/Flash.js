import store from '../store'

import { addFlashData, emptyFlashData } from '../actions/FlashActions'

export default class Flash {

    static add(message, type) {
        store.dispatch(addFlashData(message, type))
    }

    static empty() {
        store.dispatch(emptyFlashData())
    }
}
