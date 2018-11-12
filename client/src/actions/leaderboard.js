
const updateleaderboardAction = () => {
    return (dispatch) =>
    {
        fetch('/api/leaderboard')
        .then( res => res.json())
        .then((data) =>
        {
            dispatch({
                type:'UPDATE_LEADERBOARD',
                payload:data
            })
        })
    }
}
export default updateleaderboardAction;
