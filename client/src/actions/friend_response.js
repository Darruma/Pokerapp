const friendRequestResponseAction = (answer, ids) => {
    return (dispatch) => {
        fetch('/api/profiles/answerrequest', {
            method: "POST",
            headers: {
                "Content-Type": "application/json ",
            },
            body: JSON.stringify(
                {
                    answer: answer,
                    id: this.props.id
                }
            ),
        }).then(
            res => res.json()
        ).then(
            res =>
            {
                dispatch(
                    {
                        type:'FRIEND_REQUEST_RESPONSE',
                        payload:res
                    }
                )
            }
        )
    }
}