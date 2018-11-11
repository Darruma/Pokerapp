const initalState = {
    new_username: '',
    new_password: '',
    new_password_confirm: '',
    signup_response: {},
    modal_active: false
}
const signupReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'CHANGE_MODAL_SIGNUP':
            return Object.assign({}, state, {
                modal_active: action.payload
            })
        case 'POST_SIGNUP':
            return Object.assign({}, state, {
                signup_response: action.payload
            })
        case 'UPDATE_NEW_USERNAME':
            return Object.assign({}, state, {
                new_username: action.payload
            })
        case 'UPDATE_NEW_PASSWORD':
            return Object.assign({}, state, {
                new_password: action.payload
            })
        case 'UPDATE_NEW_PASSWORD_CONFIRM':
            return Object.assign({}, state, {
                new_password_confirm: action.payload
            })
        default:
            return state
    }
}
export default signupReducer