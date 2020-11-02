import React from 'react';
import './TheHeader.styles.scss';
import { NavLink, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'

const TheHeader = ({currentUser}) => (
    <header className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <nav className="options">
            <NavLink className="option" to="/shop">
                SHOP
            </NavLink>
            <NavLink className="option" to="/contacts">
                CONTACTS
            </NavLink>
            {currentUser ? 
            <NavLink className="option" to="/logout">
                LOG OUT
            </NavLink>
            : 
            <NavLink className="option" to="/signin">
                LOG IN
            </NavLink>
            }
        </nav>
    </header>
)

export default TheHeader;