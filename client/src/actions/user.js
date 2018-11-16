
const getUserAction = () => {
    return (dispatch) =>
    {
    fetch('/api/profiles/me').then(res => res.json())
        .then((data) => {
            dispatch(
                {
                    type: 'GET_MY_PROFILE',
                    payload: data
                }
            )
        }
    )
    }
}
export default getUserAction