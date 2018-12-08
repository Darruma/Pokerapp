const initalState =
{
    lobbies: [],
    selected: -1
}
const lobbyReducer = (state = initalState, action) => {
    switch (action.type) {

        case 'GET_LOBBIES':
            return Object.assign({}, state, {
                lobbies: action.payload
            })
        case 'SELECT_LOBBY':
            return Object.assign({}, state, {
                selected: action.payload
            })
        default:
            return state
    }
}
export default lobbyReducer