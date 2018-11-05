import React, { Component } from 'react'
import FriendList from './FriendList'
import friendQueryAction from '.../actions/friend'
class Search extends Component
{
  render()
  {
    return(<div>
          <input onChange={this.handleChange}></input>
          <FriendList friendData={this.props.queryData}> </FriendList>
    <div>)
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
