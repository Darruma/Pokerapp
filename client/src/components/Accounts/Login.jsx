import React, { Component } from 'react'
import '.../css/login.css'
import { connect } from 'react-redux';
import updateLoginAction from '.../actions/login'
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
                    <button className='login-button'>Login</button>
                        </div>
                </form>
            </div>
        )
    }
    handleFormSubmit = (e) =>
    {
       e.preventDefault();
       fetch('/api/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json ",
        },
        body: JSON.stringify(
            {
                username:this.props.username,
                password:this.props.password
            }
        ),
    })
    .then(response => response.json()).then(response => {
        console.log(response);
    });
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
