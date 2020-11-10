import React from 'react'
import './ProductCheckout.styles.scss'
//======> REDUX 
import { connect } from 'react-redux';
import { deleteItemFromCart, addItemToCart, reduceItemsInCart } from '../../redux/cart/cart.actions'

const ProductCheckout = ({ cartItem: { id, name, imageUrl, price, quantity }, deleteItemFromCart, addItemToCart, reduceItemsInCart }) => {
    const item = { id, name, imageUrl, price, quantity }
    return (
        <div className="checkout-item"> 
            <div className="image-container">
                <img alt="item" src={imageUrl} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => reduceItemsInCart(item)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItemToCart(item)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => deleteItemFromCart(item)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return (
        {
            deleteItemFromCart: (item) => dispatch(deleteItemFromCart(item)),
            addItemToCart: (item) => dispatch(addItemToCart(item)),
            reduceItemsInCart: (item) => dispatch(reduceItemsInCart(item))
        }
    )
}

export default connect(null, mapDispatchToProps)(ProductCheckout);