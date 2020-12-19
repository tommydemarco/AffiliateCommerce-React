import React from 'react';
import './SignIn.styles.scss';
import FormInput from '../form-input/FormInput'  
import CustomButton from '../custom-button/CustomButton'
import { connect } from 'react-redux'
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions'

class SingIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const emailAndPassword = { email: this.state.email, password: this.state.password }

        try {
            this.props.emailSignInStart(emailAndPassword)
        } catch(e) {
            console.log(e)
        }

        this.setState({email: '', password: ''})
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const { email, password } = this.state 
        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" id="email" type="email" label="email" handleChange={this.handleChange} value={email} required />
                    <FormInput name="password" id="password" type="password" label="password" handleChange={this.handleChange} value={password} required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type="button" onClick={ this.props.googleSignInStart } isGoogleButton>Google sign in</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: (authObject) => dispatch(emailSignInStart(authObject))
    }
}

export default connect(null, mapDispatchToProps)(SingIn);