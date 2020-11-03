import React from 'react';
import CustomButton from '../custom-button/CustomButton'
import './CartDropdown.styles.scss'
import CartItem from '../cart-item/CartItem'
//=====> REDUX 
import { connect } from 'react-redux'

const CartDropdown = ({ items }) => (
    <aside className="cart-dropdown">
        <div className="class-items">
            {items.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </aside>
)

const mapStateToProps = state => {
    return (
        {items: state.cart.cartItems}
    )
}

export default connect(mapStateToProps)(CartDropdown);