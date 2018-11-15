const page = (page) =>
{
    return (dispatch) =>
    {
        dispatch(
            {
                type:'CHANGE_PAGE',
                payload:'page'
            }
        )
    }
}