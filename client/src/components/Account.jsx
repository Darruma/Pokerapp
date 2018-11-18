import React, { Component } from 'react'
import User from './User'
import Posts from './Posts'
import Statistics from './Statistics';
import { Redirect } from 'react-router-dom'
import getUserAction from '../actions/user'
import { connect } from 'react-redux';
class Account extends Component {
    render() {
        console.log(this.props.profileData)
        if(this.props.loggedIn == false)
        {
            return(<Redirect to='/login'></Redirect>)
        }
        return (
            <div> 
                <div className='Profile'>
                <User image={'images/' + this.props.profileData.image} name={'You'} bio={this.props.profileData.bio} friends={this.props.profileData.friends}>
                </User>
                <div className='main'>
                    <p className='profile-username posts-title' >Posts</p>
                    <textarea className='post-input' rows={1}></textarea>
                    <textarea className='post-input' rows={4}></textarea>
                    <Posts posts={this.props.profileData.posts}></Posts>
                </div>
                <Statistics priceData={this.props.profileData.priceData} wins={this.props.profileData.wins} losses={this.props.profileData.losses} draws={this.props.profileData.draws}></Statistics>
            </div></div>
        )
    }
    componentDidMount() {
        this.props.dispatch(getUserAction());
        console.log("test");
       
    }

}
const mapStateToProps = (state) => {
    return {
        profileData: state.profileReducer.myData,
        loggedIn:state.profileReducer.loggedIn
    }
}

export default connect(mapStateToProps)(Account)
