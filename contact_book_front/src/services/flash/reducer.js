const initialState = {
    message: null,
    type: null,
}

export default function(state = initialState, action) {
    switch (action.type) {

        case 'ADD_FLASH':
            return action.flashData

        case 'EMPTY_FLASH':
            return {
                message: null,
                type: null,
            }

        default:
            return state
    }
}
