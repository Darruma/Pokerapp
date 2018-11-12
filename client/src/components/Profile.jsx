import React, { Component } from 'react'
import '../css/profile.css'
import '../App.css'
import getProfileAction from '../actions/profile'
import { connect } from 'react-redux';
import User from './User'
import Posts from './Posts'
import Statistics from './Statistics';
class Profile extends Component {

    render() {
        return (
            <div className='Profile'>
                <User image={this.props.profileData.image} name={this.props.match.params.userId} bio={this.props.profileData.bio} friends={this.props.profileData.friends}>
                </User>
                <div className='main'>
                    <p className='profile-username posts-title' >Posts</p>
                        <Posts posts={this.props.profileData.posts}></Posts>
                </div>
                <Statistics priceData={this.props.profileData.priceData} wins={this.props.profileData.wins} losses={this.props.profileData.losses} draws={this.props.profileData.draws}></Statistics>
            </div>
        )
    }

    componentDidMount() {
        this.props.dispatch(getProfileAction(this.props.match.params.userId));

    }

}

const mapStateToProps = (state) => {
    return {
        profileData: state.profileData
    }
}

export default connect(mapStateToProps)(Profile)
