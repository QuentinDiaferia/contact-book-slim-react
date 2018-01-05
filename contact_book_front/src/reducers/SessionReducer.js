const initialState = {
    user: {},
    error: false,
}

const SessionReducer = function(state = initialState, action) {
    switch (action.type) {

        case 'LOGIN_SUCCESS':
            return {
                user: {
                    id: 'id',
                    email: 'email',
                },
                error: false,
            }

        case 'LOGIN_FAILURE':
            return {
                user: {},
                error: true,
            }

        case 'LOGOUT':
            return {
                user: {},
                error: false,
            }

        default:
            return state
    }
}

export default SessionReducer