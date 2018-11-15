const initalState = {
    page: 'home'
}

const pageReducer = (state=initalState, action) =>

{
    if (action.type == 'CHANGE_PAGE') {
        return Object.assign({}, state,
            {
                page: action.payload
            })
    }
    else {
        return state
    }
}
export default pageReducer