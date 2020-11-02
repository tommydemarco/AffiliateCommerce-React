import React from 'react'
import './SignUp.styles.scss';
import FormInput from '../form-input/FormInput'  
import CustomButton from '../custom-button/CustomButton'

import {auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }
    handleChange = (event) => {
        this.setState({
        
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state
        
        

    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="name" id="name" type="text" label="Name" handleChange={this.handleChange} value={displayName} required />
                    <FormInput name="email" id="email" type="Email" label="email" handleChange={this.handleChange} value={email} required />
                    <FormInput name="password" id="password" type="Password" label="password" handleChange={this.handleChange} value={password} required />
                    <FormInput name="confirmPassword" id="password2" type="Confirm password" label="password" handleChange={this.handleChange} value={confirmPassword} required />
                    <CustomButton type="submit">Sign up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;