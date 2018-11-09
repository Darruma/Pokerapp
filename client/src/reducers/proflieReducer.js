import initalState from "./initalState";

export default profileReducer = (state=initalState,action) =>
{
    switch(action.type)
    {
        case 'GET_PROFILE':
        return Object.assign({}, state, {
            profileData: action.payload
        })
    
    
    }
}