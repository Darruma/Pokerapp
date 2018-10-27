import React, { Component } from 'react'
import '../css/main.css'
import '../App.css'
import {Link} from 'react-router-dom'
import poker from '../graphics/poker.png'
import leaderboard from '../graphics/leaderboard.png';
import profiles from '../graphics/profiles.png'
class Sidebar extends Component
{   
    render()
    {
        return(
            <div className='App'>
            <nav className='side-bar'>
            <Link className='link' to='/leaderboard'><img  className='icon' src={leaderboard}></img></Link>
            <Link className='link' to='/game'><img  className='icon' src={poker}></img></Link>
            <Link className='link' to='/account'><img  className='icon' src={profiles}></img></Link>
            </nav>
            </div>
        )
    }


}

export default Sidebar;