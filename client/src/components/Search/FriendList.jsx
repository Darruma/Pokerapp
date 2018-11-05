import React, { Component } from 'react'
class FriendList extends Component
{
  render()
  {
    return(<div className='friend-list-container'>
      {this.props.friendData.map(element =>
      {
        <div className='friend-container' >
          <img src={element.image}/>
          <p className='friend-name'>{element.name}</p>
          <p className='friend-bio'>{element.bio}</p>
          <button onClick={this.handleClick} id={element.id}>Add me<button>
        </div>
      })}
    <div>)
  }

}
export default FriendList;
