
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import proflieReducer from './proflieReducer';
import leaderboardReducer from './leaderboardReducer';
import friendReducer from './friendReducer';


const rootReducer = combineReducers(
    {
        loginReducer,
        signupReducer,
        proflieReducer,
        leaderboardReducer,
        friendReducer
    }
)
export default rootReducer;
