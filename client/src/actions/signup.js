const updateSignupAction = (type,value) => {
    return({
        type:'UPDATE_' + type,
        payload:value
    })
}
export default updateSignupAction;
