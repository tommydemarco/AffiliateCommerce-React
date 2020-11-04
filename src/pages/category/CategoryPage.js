import React from 'react'
import './CategoryPage.styles.scss'
//======> COMPONENTS 
import ProductItem from '../../components/product-item/ProductItem'
//======> REDUX 
import { connect } from 'react-redux';
//======> REDUX RESELECT
import { categorySelector } from '../../redux/shop/shop.selectors'

//again, being category page a component loaded through the Router component, we have access
//to the match prop, and from there you can have access to the dynamic param in the url
const CategoryPage = ({ category }) => {
    return (
        <div class="category">
            <h1>{ category.title }</h1>
            
        </div>
    )
}

const mapSateToProps = (state, otherProps) => {
    console.log(otherProps.match.params.categoryId)
    return (
        { category: categorySelector(otherProps.match.params.categoryId)(state) }
    )
}
export default connect(mapSateToProps)(CategoryPage);