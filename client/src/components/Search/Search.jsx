import React, { Component } from 'react'
import UserList from './UserList'
import friendQueryAction from '.../actions/friend'
class Search extends Component
{
  render()
  {
    return(<div>
          <input onChange={this.handleChange}></input>
          <UserList userData={this.props.queryData}> </UserList>
    </div>)
  }

  handleChange = (e) =>{
    this.props.dispatch(friendQueryAction(e.target.value));
  }

}

mapStateToProps = (state) =>
{
  return({
    queryData:state.queryData
  })
}
export default connect(mapStateToProps)(Search)
