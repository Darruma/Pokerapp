const initialState = 
{
    leaderboard:[],
    profileData:{
        username: '',
        image: '',
        bio: '',
        header: '',
        friends: [],
        posts:[],
        priceData:[],
        wins:0,
        losses:0,
        draws:0
    }
}

const rootReducer = (state=initialState,action) =>
{
    switch (action.type) {
        case 'UPDATE_LEADERBOARD':
        return Object.assign({}, state, {
            leaderboard:action.payload
          }) 
        case 'GET_PROFILE':
        return Object.assign({}, state, {
            profileData:action.payload
          }) 
        default:
            return state;
    }
    
}
export default rootReducer;