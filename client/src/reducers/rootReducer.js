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
    },
   username:'',
   password:'',
   new_username:'',
   new_password:'',
   new_password_confirm:''
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
         case 'UPDATE_PASSWORD':
        return Object.assign({}, state, {
            password:action.payload
          })
          case 'UPDATE_USERNAME':
        return Object.assign({}, state, {
            username:action.payload
          })
 
        case 'UPDATE_NEW_USERNAME':
        return Object.assign({}, state, {
            new_username:action.payload
          }) 
         case 'UPDATE_NEW_PASSWORD':
        return Object.assign({}, state, {
         new_password:action.payload
          })
        case 'UPDATE_NEW_PASSWORD_CONFIRM':
        return Object.assign({}, state, {
            new_password_confirm:action.payload
          })
        

        
       
      
       
        default:
            return state;
    }
    
}
export default rootReducer;
