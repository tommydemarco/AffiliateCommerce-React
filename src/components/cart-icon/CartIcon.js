import React from 'react';
import './CartIcon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = () => {
    return (
        <div className="cart-icon">
            <ShoppingIcon className="shopping-icon" />
            <span className="count">0</span>
        </div>
    )
}

export default CartIcon;