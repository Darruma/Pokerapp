
const getProfileAction = (username) => {
    return (dispatch) =>
    {
    fetch('/api/profiles/'+username ).then(res => res.json())
        .then((data) => {
            dispatch(
                {
                    type: 'GET_PROFILE',
                    payload: data
                }
            )
        }
    )
    }
}
export default getProfileAction;