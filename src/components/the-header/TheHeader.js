import React from 'react';
import './TheHeader.styles.scss';
import { NavLink, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'

const TheHeader = ({currentUser, cartDisplay}) => (
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
            <CartIcon />
        </nav>
        {cartDisplay ?
            <CartDropdown /> : false
        }
    </header>
)

const mapStateToProps = ({user: {currentUser}, cart: { cartDisplay } }) => {
    return {
        currentUser,
        cartDisplay
    }
}

export default connect(mapStateToProps)(TheHeader);