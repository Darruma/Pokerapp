const page = (page) =>
{
    return({
        type:'CHANGE_PAGE',
        payload:page
    })
}
export default page;