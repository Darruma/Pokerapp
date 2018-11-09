import React, { Component } from 'react'

class UserInfo extends Component {
    render() {
        return (
            <div className='user-container'>
                <img src={this.props.image} />
                <p>{this.props.name}</p>
                <p>{this.props.bio}</p>
            </div>

        )
    }
}
export default UserInfo;