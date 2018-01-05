export function loginSuccess(data) {
    return {
        type: 'LOGIN_SUCCESS',
        data
    }
}

export function loginFailure(data) {
    return {
        type: 'LOGIN_FAILURE',
        data
    }
}
