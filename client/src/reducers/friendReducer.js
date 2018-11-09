import initalState from "./initalState";

export default friendReducer = (state = initalState,action) => {
    switch (action.type) {
        case 'QUERY_FRIEND':
            return Object.assign({}, state, {
                queryData: action.payload
            })
        case 'ADD_USER':
            return Object.assign({},state,{
                response:action.payload
            })
        case 'FRIEND_REQUEST_RESPONSE':
        {
            return Object.assign({},state,{
                response:action.payload
            })
        }
    }
}