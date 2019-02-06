import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Leaderboard from './components/Leaderboard';
import Game from './components/Game';
import Signup from './components/Signup'
import Account from './components/Account';
import Login from './components/Login'
import Homepage from './components/Homepage';
// Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'
import Search from './components/Search';
import LobbyMenu from './components/LobbyMenu';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                    <Router>
                        <div>
                            <Sidebar>
                            </Sidebar>
                            <Switch>
                                <Route exact path ='/' component={Homepage}></Route>
                                <Route path='/signup' component={Signup}></Route>
                                <Route path='/login'component={Login}></Route>
                                <Route path='/profile/:userId' component={Profile}></Route>
                                <Route path='/leaderboard' component={Leaderboard}></Route>
                                <Route path='/game' component={Game}> </Route>
                                <Route path='/lobbies' component={LobbyMenu}></Route>
                                <Route path='/account' component={Account}> </Route>
                                <Route path='/search' component={Search}></Route>
                            </Switch>
                        </div>
                       
                    </Router>
            </Provider>
        )
    }

}

export default App