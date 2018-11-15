import React, { Component } from 'react'
import UserInfo from './UserInfo'
class UserList extends Component {
  render() {
    return (<div className='user-list-container'>
      {this.props.userData.map(element => {
        return (
          <UserInfo profilePicture={'images/'+element.image} id={element.id} username={element.username} >
          </UserInfo>
        )
      })}
    </div>)
  }

}
export default UserList;
