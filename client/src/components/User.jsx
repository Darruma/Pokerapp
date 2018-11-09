import React, { Component } from 'react'
import Friend from './Friend';
class User extends Component {
    render() {
        return (<div className='profile-container'>
            <div className='profile-picture'>
                <img src={this.props.image} className='picture'></img>
            </div>
            <p className='profile-username'>
                {this.props.name}
            </p>
            <div className='bio'>
                {this.props.bio}
            </div>
            <div className='friends'>
                <p className='friends-title'>Friends</p>
                {this.props.friends.map(element => {
                    return (<Friend data={element}>
                    </Friend>)
                }
                )}
            </div>
        </div>)
    }
}
export default User