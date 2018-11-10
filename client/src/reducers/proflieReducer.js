import initalState from "./initalState";

const profileReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'GET_PROFILE':
            return Object.assign({}, state, {
                profileData: action.payload
            })

        default:
            return state
    }

}
export default profileReducer