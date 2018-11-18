const initalState = {
    page: 'home',
    modal_active: false,
    modal_message: '',
    loggedIn: false
}

const pageReducer = (state = initalState, action) => {
    switch (action.type) {

        case 'CHANGE_LOGIN':
            return Object.assign({}, state,
                {
                    loggedIn: action.payload
                })

        case 'CHANGE_PAGE':
            return Object.assign({}, state,
                {
                    page: action.payload
                })
        case 'CHANGE_MODAL_STATUS':
            return Object.assign({}, state, {
                modal_active: action.payload
            })
        case 'CHANGE_MODAL_TEXT':
            return Object.assign({}, state, {
                modal_message: action.payload
            })


        default:
            return state;
    }
}
export default pageReducer