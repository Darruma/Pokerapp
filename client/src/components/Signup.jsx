import React, { Component } from 'react'
import '../css/login.css'
import { connect } from 'react-redux';
import updateSignupAction from '../actions/login'
import postSignupAction from '../actions/authenticate'
import changeModalAction from '../actions/modal'
import Modal from 'react-modal'
class Signup extends Component {
    render() {
        return (
            <div className='login-container'>
                <Modal appElement={document.getElementById('root')} className='modal' isOpen={this.props.modal_active}>
                    <p className='modal-text'>{this.props.response.message}</p>
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
    handleFormSubmit = (e, type) => {
        e.preventDefault();
        this.props.dispatch(postSignupAction('SIGNUP', this.props.new_username, this.props.new_password));
        if (this.props.response.success) {
            this.history.push('/login');
        }
        this.props.dispatch(changeModalAction(true));
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
        modal_active: state.signupReducer.modal_active
    }
}
export default connect(mapStateToProps)(Signup);
