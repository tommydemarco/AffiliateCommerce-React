import React from 'react';
import './PreviewCategory.styles.scss'
import ProductItem from '../product-item/ProductItem'
//======> ROUTER 
import { withRouter } from 'react-router-dom'

const PreviewCategory = ({title, routeName, items, match, history}) => {
    return (
        <div className="collection-preview" onClick={() => history.push(`${match.url}/${routeName}`)}>
            <h2 className="title">
                {title}
            </h2>
            <div className="preview">
                {items.filter((item, index) => index < 4).map(({id, ...otherItemProps }) => (
                    <ProductItem key={id} id={id} { ...otherItemProps } ></ProductItem>
                ))}
            </div>
        </div>
    )
}

export default withRouter(PreviewCategory);