import React, { Component } from 'react';
import '../css/leaderboard.css'
import '../App.css'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import updateLeaderboard from '../actions/leaderboard'
class Leaderboard extends Component {

    render() {

        return (
            <div className='App'>
                <ul className='leaderboard-container'>
                    <h1>Leaderboard</h1>
                    {this.props.leaderboard.map((element) => {
                        return (
                            <Link to={'/profile/' + element.username} className='profile-link'>
                                <li className='user-stats'>
                                    <img className='image' src={'/images/' + element.profilePicture} />
                                    <div className='username'>
                                        {element.username}
                                    </div>
                                    <div className='points'>
                                        {element.points}$
                            </div>
                                </li>
                            </Link>

                        )
                    }
                    )}
                </ul>
            </div>
        )
    }

    componentWillMount() {
        this.props.dispatch(updateLeaderboard());
    }
}

const mapStateToProps = (state) => {
    return {
        leaderboard: state.leaderboardReducer.leaderboard
    }
}

export default connect(mapStateToProps)(Leaderboard);
