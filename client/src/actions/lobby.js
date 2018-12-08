export const selectLobbyAction = (index) =>
{
    return(
        {
            type:'SELECT_LOBBY',
            payload:index
        }
    ) 
}

export const getLobbiesAction = () =>
{
    return (dispatch) =>
    {
        return fetch('api/lobbies').then(res => res.json())
        .then( data =>
            {
                dispatch(
                    {
                        type:'GET_LOBBIES',
                        payload:data
                    }
                )
            })
    }
}