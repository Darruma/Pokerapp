import React, { Component } from 'react'
import '../css/login.css'
import { connect } from 'react-redux';
import { updateLoginAction as updateSignupAction }  from '../actions/login'
import { Redirect } from 'react-router-dom'
import postSignupAction from '../actions/authenticate'
import changeModalAction from '../actions/modal'
import changeModalText from '../actions/modal_text'
import Modal from 'react-modal'
class Signup extends Component {
    render() {
        if (this.props.response.success) {
            return (<Redirect to={'/login'}></Redirect>)
        }
        return (
            <div className='login-container'>
                <Modal appElement={document.getElementById('root')} className='modal' isOpen={this.props.modal_active}>
                    <p className='modal-text'>{this.props.modal_message}</p>
                    <button onClick={(e) => { this.props.dispatch(changeModalAction(false)) }}>Exit</button>
                </Modal>
                <form onSubmit={this.handleFormSubmit}>
                    <div className='username-container'>
                        <input className='input' onChange={(e) => this.handleInputChange(e, 'NEW_USERNAME')} placeholder="username"></input>
                    </div>

                    <div className='password-container'>
                        <input className='input' onChange={(e) => this.handleInputChange(e, 'NEW_PASSWORD')} type='password' placeholder="password"></input>
                        <input className='input' style={{ marginTop: '10px' }} onChange={(e) => this.handleInputChange(e, 'NEW_PASSWORD_CONFIRM')} type='password' placeholder="password"></input>

                    </div>
                    <div className='login-button-container'>
                        <button className='login-button'> Signup</button>
                    </div>
                </form>
            </div>
        )
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        if (this.props.new_password !== this.props.new_password_confirm) {
            this.props.dispatch(changeModalText("The passwords do not match, please enter them again"));
            this.props.dispatch(changeModalAction(true));
            return;
        }
        this.props.dispatch(postSignupAction('SIGNUP', this.props.new_username, this.props.new_password)).then(() => {
            if (!this.props.response.success) {
                this.props.dispatch(changeModalText(this.props.response.message));
                this.props.dispatch(changeModalAction(true));
            }
        }
        )

    }
    handleInputChange = (e, type) => {
        this.props.dispatch(updateSignupAction(type, e.target.value));
    }
}

const mapStateToProps = (state) => {
    return {
        new_username: state.signupReducer.new_username,
        new_password: state.signupReducer.new_password,
        new_password_confirm: state.signupReducer.new_password_confirm,
        response: state.signupReducer.signup_response,
        modal_active: state.pageReducer.modal_active,
        modal_message: state.pageReducer.modal_message
    }
}
export default connect(mapStateToProps)(Signup);
