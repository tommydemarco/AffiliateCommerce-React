import React from 'react'
import './CategoryPage.styles.scss'
//======> COMPONENTS 
import ProductItem from '../../components/product-item/ProductItem'
//======> REDUX 
import { connect } from 'react-redux';
//======> REDUX RESELECT
import { categorySelector } from '../../redux/shop/shop.selectors'

const CategoryPage = ({ category }) => {
    const { title, items } = category
    
    return ( 
        <div class="collection-page">
           <h1 className="title">{title}</h1>
           <div className="items">
           {items.map(({id, ...otherItemProps }) => (
                <ProductItem key={id} id={id} { ...otherItemProps } ></ProductItem>
            ))}
           </div>
        </div>
    )
}

//again, being category page a component loaded through the Router component, we have access
//to the match prop, and from there you can have access to the dynamic param in the url
const mapSateToProps = (state, otherProps) => {
    return (
        { category: categorySelector(otherProps.match.params.categoryId)(state) }
    )
}
export default connect(mapSateToProps)(CategoryPage);