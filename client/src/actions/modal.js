const changeModal = (value,type) => {
    return({
        type:'CHANGE_MODAL_' + type,
        payload:value
    })
}
export default changeModal