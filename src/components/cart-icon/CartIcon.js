import React from 'react';
import './CartIcon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
//=======> REDUX 
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cart.actions'
//======> RESELECT, REDUX SELECTORS 
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

                //the mapDispatchToProps, together with the connect function 
                //make the dispatch action available in the props
const CartIcon = ({ toggleCart, itemCount }) => {
    return (
        <div className="cart-icon" onClick={toggleCart}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

const mapStateToProps = state => {
    return (
        {itemCount: selectCartItemsCount(state)}
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);