
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import profileReducer from './profileReducer';
import leaderboardReducer from './leaderboardReducer';
import friendReducer from './friendReducer';
import pageReducer from './pageReducer'

const rootReducer = combineReducers(
    {
        loginReducer,
        signupReducer,
        profileReducer,
        leaderboardReducer,
        friendReducer,
        pageReducer
    }
)
export default rootReducer;
