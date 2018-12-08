import React , { Component } from 'react'
import '../css/lobby.css'
class Lobby extends Component
{
    render()
    {
        return <div className='lobby' onClick={this.handleClick}>
         <div className='lobby-cell'>{this.props.type}</div>
         <div className='lobby-cell'>{this.props.playerAmount}</div>
         <div className='lobby-cell'>{this.props.gameStatus}</div>
         <div className='lobby-cell'>{this.props.buyin}</div>
        </div>
    }
    
}
export default Lobby;