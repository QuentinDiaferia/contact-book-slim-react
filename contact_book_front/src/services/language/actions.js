import store from 'store'

class Language {
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

export default Language
