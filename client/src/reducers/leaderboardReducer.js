import initalState from "./initalState";
const leaderboardReducer = (state = initalState, action) =>
{
    if (action.type == 'UPDATE_LEADERBOARD') {
        return Object.assign({}, state, {
            leaderboard: action.payload
        })
    }
    return state;
}
export default leaderboardReducer