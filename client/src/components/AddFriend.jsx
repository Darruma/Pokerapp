import React, {Component} from 'react'
import addUserAction from '../actions/adduser'
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
       this.props.dispatch(addUserAction(this.props.id))
      }

}
export default AddFriend