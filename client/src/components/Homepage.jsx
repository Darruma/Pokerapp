import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce'
import { Link } from 'react-router-dom';
class Homepage extends Component {
    render() {
        return (
            <div className='homepage'>
                <div className='homepage-title'>
                    <Fade bottom>
                        Pokerhub
               </Fade>
                </div>
                <Bounce top>
                    <Link  className='login-link'to={'/login'}><button className='login-button'>Login</button></Link>
                </Bounce>
                <Bounce bottom>
                    <Link  className='login-link'to={'/signup'}><button className='login-button'>Signup</button></Link>
                </Bounce>

            </div>
        )
    }


}

export default Homepage;