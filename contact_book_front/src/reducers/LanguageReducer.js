const initialState = {
    language: null,
}

const LanguageReducer = function(state = initialState, action) {
    switch (action.type) {

        case 'LOAD_LANGUAGE':
            return action.language

        default:
            return state
    }
}

export default LanguageReducer
