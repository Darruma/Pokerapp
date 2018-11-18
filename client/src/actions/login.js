export const updateLoginAction = (type, value) => {
    return ({
        type: 'UPDATE_' + type,
        payload: value
    })
}


export const changeLoginAction = (value) =>
{
    return ({
        type:'CHANGE_LOGIN',
        payload:value
    })
}

