import React from 'react';
import './TheHeader.styles.scss';
import { NavLink, Link } from 'react-router-dom'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
//======> REDUX 
import { connect } from 'react-redux';
//======> REDUX RESELECT for caching 
import { selectCurrentUser } from '../../redux/user/user.selectors'

const TheHeader = ({currentUser, cartDisplay}) => (
    <header className="header">
        <div className="header__container">
            <Link to="/" className="logo-container">
                <span className="header__logo">&#9819;</span>
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
        </div>
    </header>
)

const mapStateToProps = (state) => {
    return {
        currentUser: selectCurrentUser(state),
        cartDisplay: state.cart.cartDisplay
    }
}

export default connect(mapStateToProps)(TheHeader);