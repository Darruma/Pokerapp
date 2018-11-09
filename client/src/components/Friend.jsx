import React, { Component } from 'react'
import '../css/friend.css'

class Friend extends Component
{   
    render()
    {
    
        return(
            <a href={`/profile/${this.props.data.friendName}`} className='friend-link'>
            <div className='friend'>
                <div className='image'>
                    <img src={this.props.data.image} className='image-40'></img>
                </div>
                <p className='friend-name'>{this.props.data.friendName}</p>
            </div>                      
            </a>
        )
    }


}

export default Friend;