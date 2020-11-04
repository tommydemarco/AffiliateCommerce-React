import React from 'react'
import './SignUp.styles.scss';
import FormInput from '../form-input/FormInput'  
import CustomButton from '../custom-button/CustomButton'

import {auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword ) {
            alert("The password you enetered don't match")
            return
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password)


            await createUserProfileDocument(user, { displayName })

            //clearing the form after the actions 
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch(e) {
            console.log(e)
        }



        

    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" id="name" type="text" label="Name" handleChange={this.handleChange} value={displayName} required />
                    <FormInput name="email" id="email" type="Email" label="email" handleChange={this.handleChange} value={email} required />
                    <FormInput name="password" id="password" type="Password" label="password" handleChange={this.handleChange} value={password} required />
                    <FormInput name="confirmPassword" id="password2" type="Confirm password" label="Confirm password" handleChange={this.handleChange} value={confirmPassword} required />
                    <CustomButton type="submit">Sign up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;