const initalState= {
    queryData:[],
    friend_response:{},
}
const friendReducer = (state=initalState , action) => {
    switch (action.type) {
        case 'QUERY_FRIEND':
            return Object.assign({}, state, {
                queryData: action.payload
            })
        case 'ADD_USER':
            return Object.assign({}, state, {
                friend_response: action.payload
            })
        case 'FRIEND_REQUEST_RESPONSE':
            {
                return Object.assign({}, state, {
                friend_response: action.payload
                })
            }
        default:
            return state
    }
}
export default friendReducer