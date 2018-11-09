export default loginReducer = (state =initalState, action) => {
    switch (action.type) {
        case 'UPDATE_PASSWORD':
            return Object.assign({}, state, {
                password: action.payload
            })
        case 'UPDATE_USERNAME':
            return Object.assign({}, state, {
                username: action.payload
            })
        case 'POST_LOGIN':
            return Object.assign({}, state, {
                response: action.payload
            })
    }
}