import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import Profile from './components/Profile';
import Leaderboard from './components/Leaderboard';
import Game from './components/Game';
import Signup from './components/Signup'
import Account from './components/Account';
import Login from './components/Login'

// Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'
const store = createStore(rootReducer,applyMiddleware(thunk));



class App extends Component {
    render() {
        return (
            <Provider store={store}>
                    <Router>
                        <div>
                            <Main>
                            </Main>
                            <Switch>
                                <Route exact path ='/' component={Login}></Route>
                                <Route path='/signup' component={Signup}></Route>
                                <Route path='/profile/:userId' component={Profile}></Route>
                                <Route path='/leaderboard' component={Leaderboard}></Route>
                                <Route path='/game' component={Game}> </Route>
                                <Route path='/account' component={Login}> </Route>
                            </Switch>
                        </div>
                    </Router>
            </Provider>
        )
    }

}

export default App