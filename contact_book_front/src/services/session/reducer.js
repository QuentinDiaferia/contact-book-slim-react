const initialState = {
    loggedIn: isLoggedIn(),
    user: getSessionUser(),
    error: false,
}

function isLoggedIn() {
    return Boolean(getSessionUser())
}

function getSessionUser() {
    return JSON.parse(localStorage.getItem('session_user'))
}

function setSession(data) {
    localStorage.setItem('session_user', JSON.stringify(data))
}

function deleteSession() {
    localStorage.removeItem('session_user')
}

export default function(state = initialState, action) {
    switch (action.type) {

        case 'LOGIN_SUCCESS':
            setSession(action.data)
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
            deleteSession()
            return {
                loggedIn: false,
                user: {},
                error: false,
            }

        default:
            return state
    }
}
