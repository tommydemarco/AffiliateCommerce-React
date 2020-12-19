import React from 'react';
import './LogOutPage.styles.scss';
import { connect } from 'react-redux'
import { signOutStart } from '../../redux/user/user.actions'

class LogOutPage extends React.Component {
    
    componentDidMount() {
        const { signOutStart } = this.props
        signOutStart()
    }

    render() {
        return (
            <h1>Log out successful</h1>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOutStart: () => dispatch(signOutStart())
    }
}

export default connect(null, mapDispatchToProps)(LogOutPage);