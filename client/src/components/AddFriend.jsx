import React, { Component } from 'react'
import addUserAction from '../actions/adduser'
class AddFriend extends Component {
    render() {
        if (this.props.id) {
            return (
                <button className='add-friend' onClick={this.handleClick}>
                    Add
                </button>
            )
        }
        else
        {
            return("")
        }

    }

    handleClick = (e) => {
        this.props.dispatch(addUserAction(this.props.id))
    }

}
export default AddFriend