import React from 'react';
import './ShopPage.styles.scss';
import SHOP_DATA from './ShopData';
import PreviewCategory from '../../components/preview-category/PreviewCategory'

class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collection: SHOP_DATA 
        }
    }

    render() {
        return(
            <div className="shop-page">
                {this.state.collection.map(({id, ...otherCollectionProps}) => (
                    <PreviewCategory key={id} { ...otherCollectionProps }></PreviewCategory>
                ))}
            </div>
        )
    }
}

export default ShopPage;