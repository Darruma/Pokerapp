const authenticateAction = (type, uname, passwd) => {
    return (dispatch) => {
       return fetch('api/' + type.toLowerCase(), {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(
                {
                    username: uname,
                    password: passwd
                })
        }).
            then(res => res.json()).
            then(res => {
                dispatch(
                    {
                        type: 'POST_' + type,
                        payload: res
                    }
                )
            })
    }
}

export default authenticateAction;