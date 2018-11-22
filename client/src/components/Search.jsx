import React, { Component } from 'react'
import UserList from './UserList'
import friendQueryAction from '../actions/search'
import { connect } from 'react-redux'
import '../css/search.css'
class Search extends Component {
  render() {
    var result = this.props.queryData.success ? <UserList userData={this.props.queryData.payload}> </UserList> : this.props.queryData.message
    return (<div className='App flex-column search-container'>

      <input className='search-bar' onChange={this.handleChange} maxLength={20}></input>
      {result}
    </div>)
  }

  handleChange = (e) => {
    this.props.dispatch(friendQueryAction(e.target.value));
  }

}

const mapStateToProps = (state) => {
  return ({
    queryData: state.friendReducer.queryData
  })
}
export default connect(mapStateToProps)(Search)
