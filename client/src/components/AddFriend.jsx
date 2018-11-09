import React, {Component} from 'react'

class AddFriend extends Component
{
    render()
    {
        return(
            <button onClick={this.handleClick}>
                Add
            </button>
        )
    }

    handleClick = (e) => {
        fetch('/api/profiles/sendfriendrequest', {
          method: "POST",
          headers: {
              "Content-Type": "application/json ",
          },
          body: JSON.stringify(
              {
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
export default AddFriend