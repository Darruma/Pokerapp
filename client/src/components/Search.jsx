import React, { Component } from 'react'
import UserList from './UserList'
import friendQueryAction from '../actions/search'
import { connect } from 'react-redux'
import '../css/search.css'
class Search extends Component {
  render() {
    return (<div className='App flex-column search-container'>

      <input className='search-bar' onChange={this.handleChange} maxLength={20}></input>
      <UserList userData={[{bio:'hello',name:'jesus',image:'https://t6.rbxcdn.com/2e14343c5e907f7300968333d4884891'}]}> </UserList>
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
