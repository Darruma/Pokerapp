import React, { Component } from 'react'
import AddFriend from './AddFriend';
import { Link } from 'react-router-dom'
class UserInfo extends Component {
    render() {
        return (
            <div className='profile-link'>
                <div className='user-stats search-info'>
                    <img className='image image-200' src={this.props.profilePicture} />
                    <div className='user-info-container'>
                        <Link to={'/profile/' + this.props.username} >
                            <div className='username name-text bold '>
                                {this.props.username}
                            </div>
                        </Link>

                    </div>
                    <AddFriend
                        id={this.props.id}></AddFriend>
                </div>
            </div>
        )
    }

}
export default UserInfo