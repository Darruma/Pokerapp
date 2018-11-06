import React, { Component } from 'react'
import AddFriend from './AddFriend'
class UserList extends Component {
  render() {
    return (<div className='user-list-container'>
      {this.props.userData.map(element => {
        return (
          <UserInfo image={element.image} bio={element.bio} name={element.name} >
          <AddFriend id={element.id}></AddFriend>
          </UserInfo>
        )
      })}
    </div>)
  }
  
}
export default UserList;
