import React from 'react';
import './SignIn.styles.scss';
import FormInput from '../form-input/FormInput'  
import CustomButton from '../custom-button/CustomButton'
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SingIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }
    handleChange = (event) => {
        this.setState({email: event.target.value, password: event.target.value})
    }

    render() {
        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" id="email" type="email" label="email" handleChange={this.handleChange} value={this.state.email} required />
                    <FormInput name="password" id="password" type="password" label="password" handleChange={this.handleChange} value={this.state.password} required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleButton>Google sign in</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SingIn;