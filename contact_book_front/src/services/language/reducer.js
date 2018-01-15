const initialState = {
    language: null,
}

export default function(state = initialState, action) {
    switch (action.type) {

        case 'LOAD_LANGUAGE':
            return action.language

        default:
            return state
    }
}
