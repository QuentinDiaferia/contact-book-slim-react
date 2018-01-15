const initialState = {
    loggedIn: false,
    user: {},
    error: false,
}

export default function(state = initialState, action) {
    switch (action.type) {

        case 'LOGIN_SUCCESS':
            return {
                loggedIn: true,
                user: {
                    id: action.data.id,
                    email: action.data.email,
                },
                error: false,
            }

        case 'LOGIN_FAILURE':
            return {
                loggedIn: false,
                user: {},
                error: true,
            }

        case 'LOGOUT':
            return {
                loggedIn: false,
                user: {},
                error: false,
            }

        default:
            return state
    }
}
