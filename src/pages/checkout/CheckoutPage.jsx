import React from 'react'
import './CheckoutPage.styles.scss'
import ProductCheckout from '../../components/product-checkout/ProductCheckout'
//=====> REDUX 
import { connect } from 'react-redux';
//=====> REDUX RESELECT 
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'


const CheckoutPage = ({ totalPrice, cartItems }) => {
    return (
        <section className="checkout-page">
            <h1>Checkout</h1>
            <header className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Product</span>
                </div>
            </header>


            {cartItems.map(cartItem => (
                <ProductCheckout key={cartItem.id} cartItem={cartItem} />
            ))}
            
            <footer className="total">
                <span>TOTAL: {totalPrice}€</span>
            </footer>
        </section>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage);