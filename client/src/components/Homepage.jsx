import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Homepage extends Component {
    render() {

        if (this.props.loggedIn) {
            return (<Redirect to='/account'></Redirect>)
        }
        return (
            <div className='homepage'>
                <div className='homepage-title'>
                    <Fade bottom>
                        Pokerhub
               </Fade>
                </div>
                <Bounce top>
                    <Link className='login-link' to={'/login'}><button className='login-button'>Login</button></Link>
                </Bounce>
                <Bounce bottom>
                    <Link className='login-link' to={'/signup'}><button className='login-button'>Signup</button></Link>
                </Bounce>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.pageReducer.loggedIn
    }
}

export default connect(mapStateToProps)(Homepage);