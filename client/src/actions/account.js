
const getMyProfileAction = () => {
    return (dispatch) =>
    {
    fetch('/api/profile').then(res => res.json())
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
export default getMyProfileAction;