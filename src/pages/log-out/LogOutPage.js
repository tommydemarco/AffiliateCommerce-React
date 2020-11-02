import React from 'react';
import './LogOutPage.styles.scss';
import { auth } from '../../firebase/firebase.utils'

class LogOutPage extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        auth.signOut();
    }

    render() {
        return (
            <h1>Log out successful</h1>
        )
    }
}

export default LogOutPage;