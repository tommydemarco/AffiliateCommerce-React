import React from 'react';
import './PreviewCategory.styles.scss'
import ProductItem from '../product-item/ProductItem'

const PreviewCategory = ({title, items}) => (
    <div className="collection-preview">
        <h2 className="title">
            {title}
        </h2>
        <div className="preview">
            {items.filter((item, index) => index < 4).map(({id, ...otherItemProps }) => (
                <ProductItem key={id} {...otherItemProps } ></ProductItem>
            ))}
        </div>
    </div>
)

export default PreviewCategory;