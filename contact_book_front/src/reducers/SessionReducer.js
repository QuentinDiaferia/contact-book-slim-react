const initialState = {
    user: {}
}

const SessionReducer = function(state = initialState, action) {
    switch (action.type) {

        case 'LOGIN':
            return {
                user: {
                    id: 'id',
                    email: 'email',
                }
            }

        case 'LOGOUT':
            return {
                user: {}
            }

        default:
            return state
    }
}

export default SessionReducer