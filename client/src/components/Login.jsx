import React, { Component } from 'react'
import '../css/login.css'
import { connect } from 'react-redux';
import { updateLoginAction } from '../actions/login'
import { changeLoginAction } from '../actions/login'
import Modal from 'react-modal'
import changeModalAction from '../actions/modal';
import { Redirect }from 'react-router-dom'
import changeModalText from '../actions/modal_text'
import postLoginAction from '../actions/authenticate'

class Login extends Component {
    render() {

        if(this.props.loggedIn)
        {
            return (<Redirect to='/account'></Redirect>)
        }
        return (
            <div className='login-container'>
                <Modal appElement={document.getElementById('root')} className='modal' isOpen={this.props.modal_active}>
                    <p className='modal-text'>{this.props.modal_message}</p>
                    <button onClick={(e) => { this.props.dispatch(changeModalAction(false)) }}>Exit</button>
                </Modal>
                <form onSubmit={this.handleFormSubmit}>
                    <div className='username-container'>
                        <input className='input' onChange={(e) => this.handleInputChange(e, 'USERNAME')} placeholder="username"></input>
                    </div>

                    <div className='password-container'>
                        <input className='input' onChange={(e) => this.handleInputChange(e, 'PASSWORD')} type='password' placeholder="password"></input>
                    </div>
                    <div className='login-button-container'>
                        <button className='login-button'>Login</button>
                    </div>
                </form>
            </div>
        )
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("login")
        this.props.dispatch(postLoginAction('LOGIN', this.props.username, this.props.password)).then(() => {
            if (!this.props.response.success) {
                this.props.dispatch(changeModalText(this.props.response.message));
                this.props.dispatch(changeModalAction(true));
            }else
            {
                this.props.dispatch(changeLoginAction(true));
            }
        }

        )


    }
    handleInputChange = (e, type) => {
        this.props.dispatch(updateLoginAction(type, e.target.value));
    }

}

const mapStateToProps = (state) => {
    return {
        username: state.loginReducer.username,
        password: state.loginReducer.password,
        response: state.loginReducer.login_response,
        modal_active: state.pageReducer.modal_active,
        modal_message: state.pageReducer.modal_message,
        loggedIn:state.pageReducer.loggedIn
    }
}
export default connect(mapStateToProps)(Login);
