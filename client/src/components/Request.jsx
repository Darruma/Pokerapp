import React , { Component } from 'react'
import UserInfo from './UserInfo'
import friendRequestResponseAction from '../actions/friend_request'
class Request extends Component
{
    render()
    {
        return(
            <UserInfo name={this.props.name} bio={this.props.bio} image={this.props.imagae} >
            <button onClick={(e) => this.handleClick(e,true)}> Accept</button>
            <button onClick={(e) => this.handleClick(e,false)}>Reject</button>
            </UserInfo>
        )
    }
    handleClick = (e,answer) =>
    {
        this.props.dispatch(friendRequestResponseAction(answer,this.props.id))   
    }
}
export default Request;