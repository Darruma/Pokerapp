import React , { Component } from 'react'
import Lobbies from './Lobbies'
import {getLobbiesAction} from '../actions/lobby'
class LobbyMenu extends Component
{
    render()
    {
        return <div>
            <Lobbies></Lobbies>
        </div>
    }
}
export default LobbyMenu;