import React, {Component} from 'react'
import friendRequestAction from '../actions/adduser'
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
       this.props.dispatch(friendRequestAction(this.props.id))
      }

}
export default AddFriend