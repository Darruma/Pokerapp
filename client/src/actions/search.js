
const friendQueryAction = (query) => {
    return (dispatch) => {
        setTimeout(fetch('/api/search/' + query)
            .then(res => res.json())
            .then((data) => {
                dispatch({
                    type: 'QUERY_FRIEND',
                    payload: data
                })
            }), 5000)

    }
}
export default friendQueryAction;
