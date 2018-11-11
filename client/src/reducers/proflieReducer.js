const initialState = {
    profileData:{},
    statistics:{}
}
const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'GET_PROFILE_DATA':
            return Object.assign({}, state, {
                profileData: action.payload
            })
        case 'GET_STATISTICS':
            return Object.assign({},state,
                {
                statistics:action.payload
                })

        default:
            return state
    }

}
export default profileReducer