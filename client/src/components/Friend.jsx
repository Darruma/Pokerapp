import React, { Component } from 'react'
import '../css/friend.css'
import { Link } from 'react-router-dom';
class Friend extends Component
{   
    render()
    {
    
        return(
            <Link to={this.props.data.friendName} className='friend-link'>
            <div className='friend'>
                <div className='image'>
                    <img src={this.props.data.image} className='image-40'></img>
                </div>
                <p className='friend-name'>{this.props.data.friendName}</p>
            </div>                      
            </Link>
        )
    }


}

export default Friend;