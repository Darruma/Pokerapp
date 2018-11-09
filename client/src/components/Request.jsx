import React , { Component } from 'react'
import UserInfo from './UserInfo'
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
        fetch('/api/profiles/answerrequest', {
            method: "POST",
            headers: {
                "Content-Type": "application/json ",
            },
            body: JSON.stringify(
                {
                   answer:answer,
                   id:this.props.id
                }
            ),
        }).then(
            res => res.json()
        ).then(
          res => console.log(res)
        )
    }
}
export default Request;