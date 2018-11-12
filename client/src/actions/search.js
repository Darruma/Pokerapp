
const friendQueryAction = (query) => {
    return (dispatch) => {
        fetch('/api/profiles/search/' + query)
            .then(res => res.json())
            .then((data) => {
                dispatch({
                    type: 'QUERY_FRIEND',
                    payload: data
                })
            })

    }
}
export default friendQueryAction;
