import React, { Component } from 'react'
import UserInfo from './UserInfo'
class UserList extends Component {
  render() {
    return (<div className='user-list-container'>
      {this.props.userData.map(element => {
        return (
          <UserInfo profilePicture={element.image} bio={element.bio} username={element.name} >
          </UserInfo>
        )
      })}
    </div>)
  }
  
}
export default UserList;
