const updateLoginAction = (type,value) => {
    return({
        type:'UPDATE_' + type,
        payload:value
    })
}
export default updateLoginAction;