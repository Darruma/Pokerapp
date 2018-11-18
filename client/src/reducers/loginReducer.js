const initalState =
{
    username: '',
    password: '',
    login_response: {}
}
const loginReducer = (state = initalState, action) => {
    switch (action.type) {

        case 'POST_LOGIN':
            return Object.assign({}, state, {
                login_response: action.payload
            })
        case 'UPDATE_PASSWORD':
            return Object.assign({}, state, {
                password: action.payload
            })
        case 'UPDATE_USERNAME':
            return Object.assign({}, state, {
                username: action.payload
            })

        default:
            return state
    }
}
export default loginReducer