import React from 'react';
import './CartIcon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
//=======> REDUX 
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cart.actions'

                //the mapDispatchToProps, together with the connect function 
                //make the dispatch action available in the props
const CartIcon = ({ toggleCart }) => {
    return (
        <div className="cart-icon" onClick={toggleCart}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

export default connect(null, mapDispatchToProps)(CartIcon);