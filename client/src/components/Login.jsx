import React, { Component } from 'react'
import '../css/login.css'
import { connect } from 'react-redux';
import updateLoginAction from '../actions/login'
class Login extends Component {
    render() {
        return (
            <div className='login-container'>
                <form onSubmit={this.handleFormSubmit}>
                    <div className='username-container'>
                    <input className='input' onChange={ (e) => this.handleInputChange(e,'USERNAME')}placeholder="username"></input>
                    </div>

                    <div className='password-container'>
                    <input className='input' onChange={ (e) => this.handleInputChange(e,'PASSWORD')} type='password' placeholder="password"></input>
                    </div>
                    <div className='login-button-container'>
                    <button className='login-button'> Login</button>
                        </div>
                </form>
            </div>
        )
    }
    handleFormSubmit = (e) => 
    {
       e.preventDefault();
       console.log(this.props.username);
       console.log(this.props.password);
    }
    handleInputChange = (e,type) =>
    {
      
       this.props.dispatch(updateLoginAction(type,e.target.value));
    }

}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        password:state.password
    }
}
export default connect(mapStateToProps)(Login);