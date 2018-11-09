import initalState from "./initalState";

export default friendReducer = (state = initalState,action) => {
    switch (action.type) {
        case 'QUERY_FRIEND':
            return Object.assign({}, state, {
                queryData: action.payload
            })
    }
}