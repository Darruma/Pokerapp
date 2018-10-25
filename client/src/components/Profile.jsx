import React, { Component } from 'react'
import '../css/profile.css'
import '../App.css'
import getProfileAction from '../actions/profile'
import { connect } from 'react-redux';
import Friend from './Friend';
import Posts from './Posts'
import PriceChart from './Pricechart';
import PieChart from './Piechart';
class Profile extends Component {

    render() {
        return (
            <div className='Profile'>
                <div className='header-image'>

                </div>
                <div className='profile-container'>
                    <div className='profile-picture'>
                        <img src={this.props.profileData.image} className='picture'></img>
                    </div>
                    <p className='profile-username'>
                    {this.props.match.params.userId}
                    </p>
                    <div className='bio'>
                        {this.props.profileData.bio}
                    </div>
                    <div className='friends'>
                    <p className='friends-title'>Friends</p>
                        {this.props.profileData.friends.map(element => {
                            return (<Friend data={element}>
                            </Friend>)
                        }
                        )}
                    </div>
                </div>

                <div className='main'>
                    <p className='profile-username posts-title' >Posts</p>
                                        <div className='posts'>
                    <Posts posts={this.props.profileData.posts}></Posts>
                    </div>
                </div>

                <div className='statistics'>
                    <div className='line-chart'>
                            <PriceChart data={this.props.profileData.priceData}></PriceChart>
                    </div>

                    <div className='pie-chart'>
                    <PieChart wins={this.props.profileData.wins} losses={this.props.profileData.losses} draws={this.props.profileData.draws}></PieChart>
                    </div>
                    <div className='tags'>
                    <p className='tag'>Wins <div className='green block'></div></p> 
                    <p className='tag'>Losses <div className='red block'></div></p> 
                    <p className='tag' > Draws <div className='yellow block'></div> </p> 
                    </div>
                </div>
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