import React, { Component } from 'react'
import '.../css/login.css'
import { connect } from 'react-redux';
import updateSignupAction from '.../actions/login'
import postSignupAction from '.../actions/response'

class Signup extends Component
{
    render()

     {
       return (
      <div className='login-container'>
                
                <form onSubmit={this.handleFormSubmit}>
                    <div className='username-container'>
                        <input className='input' onChange={ (e) => this.handleInputChange(e,'NEW_USERNAME')}placeholder="username"></input>
                    </div>

                    <div className='password-container'>
                       <input className='input'  onChange={ (e) => this.handleInputChange(e,'NEW_PASSWORD')} type='password' placeholder="password"></input>
                        <input className='input' style={{marginTop:'10px'}} onChange={ (e) => this.handleInputChange(e,'NEW_PASSWORD_CONFIRM')} type='password' placeholder="password"></input>

                    </div>
                    <div className='login-button-container'>
                    <button className='login-button'> Signup</button>
                        </div>
                </form>
        </div>
       )
    }
     handleFormSubmit = (e,type) =>
      {
       e.preventDefault();
       this.props.dispatch(postSignupAction('SIGNUP',this.props.username,this.props.password));
      }
    handleInputChange = (e,type) =>
     {
        this.props.dispatch(updateSignupAction(type,e.target.value));
     }
}

const mapStateToProps = (state) => {
    return {
        new_username:state.new_username,
        new_password:state.new_password,
        new_password_confirm:state.new_password_confirm,
        response:state.response
    }
}
export default connect(mapStateToProps)(Signup);
