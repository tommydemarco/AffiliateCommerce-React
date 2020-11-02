import React from 'react';
import './ProductItem.styles.scss';

const ProductItem = ({ id, name, price, imageUrl }) => (
    <article className="collection-item">
        <header>
            <div className="image-container">
                <img src={imageUrl} className="image" />
            </div>
            <h3 className="name">{name}</h3>
            <span className="price">{price}</span>
        </header>
        <section></section>
    </article>
)

export default ProductItem;