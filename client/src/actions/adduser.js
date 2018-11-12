const addUserAction =(id) =>{
    return (dispatch) =>{
        fetch('/api/profiles/sendfriendrequest', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json "
            },
            body: JSON.stringify(
                {
                   id:this.props.id
                }
            ),
        }).then(
            res => res.json()
        ).then(res =>
          dispatch({
              type:'ADD_USER',
              payload:res
          })
        )
    }


}