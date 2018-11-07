const responseAction = (type, username, password) => {
    return (dispatch) => {
        fetch('api/' + type.toLowerCase(), {
            method: "POST",
            headers: {
                "Content-Type": "application/json ",
            },
            body: JSON.stringify(
                {
                    username,
                    password
                }
            ),
        }).
            then(res => res.json()).
            then(res => dispatch(
                {
                    type: 'POST' + type,
                    payload: res
                }
            ))
    }
}

export default responseAction;