import store from 'store'

export default class Language {
    static load(lang) {
        const language = require('language/' + lang + '.json')
        store.dispatch({
            type: 'LOAD_LANGUAGE',
            language
        })
    }

    static get(section, key) {
        return store.getState().language[section][key]
    }
}
