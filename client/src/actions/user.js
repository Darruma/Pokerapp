
const getUserAction = () => {
    return (dispatch) =>
    {
    fetch('/api/profiles/').then(res => res.json())
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