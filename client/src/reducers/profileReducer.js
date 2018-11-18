const initialState = {
    profileData: {
        image: '',
        posts: [],
        priceData: [],
        wins: 0,
        losses: 0,
        friends: [],
        bio:''
    },
    statistics: {},
    myData: {
        image: '',
        posts: [],
        priceData: [],
        wins: 0,
        losses: 0,
        friends: [],
        bio:''
    },
    success:false

}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MY_DATA':
            return Object.assign({}, state, {
                myData: action.payload.data,
                success:action.payload.success
            })
        case 'GET_PROFILE':
            return Object.assign({}, state, {
                profileData: action.payload.data,
                success:action.payload.success
            })
        case 'GET_STATISTICS':
            return Object.assign({}, state,
                {
                    statistics: action.payload
                })
        default:
            return state
    }

}
export default profileReducer