import React from 'react';
import './ProductItem.styles.scss';
import CustomButton from '../custom-button/CustomButton'
//======> REDUX 
import { connect } from 'react-redux'
import { addItemToCart } from '../../redux/cart/cart.actions'

const ProductItem = ({ id, name, price, imageUrl, addItemToCart }) => {
    const item = { id, name, price, imageUrl }
    return (
    <article className="collection-item">
        <header>
            <div className="image-container">
                <img src={imageUrl} className="image" />
            </div>
            <h3 className="name">{name}</h3>
            <span className="price">{price}</span>
        </header>
        <section>
            <CustomButton onClick={() => addItemToCart(item)}>ADD TO CART</CustomButton>
        </section>
    </article>
    );
}


const mapDispatchToProps = dispatch => ({
    addItemToCart: (item) => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(ProductItem);