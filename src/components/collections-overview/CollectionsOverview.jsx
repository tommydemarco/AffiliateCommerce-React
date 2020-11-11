import React from 'react'
import './CollectionsOverview.styles.scss'
//======>COMPONENTS 
import PreviewCategory from '../preview-category/PreviewCategory'
//======> REDUX
import { connect } from 'react-redux'
//======> REDUX RESELECT
import { createStructuredSelector } from 'reselect'
import { collectionSelectorForPreview } from '../../redux/shop/shop.selectors'

const CollectionOverview = ({ collections }) => {
    console.log(collections)
    return (
        <div>
            {collections.map(({id, ...otherCollectionProps}) => (
                <PreviewCategory key={id} { ...otherCollectionProps }></PreviewCategory>
            ))}
        </div>   
    )
}

const mapStateToProps = createStructuredSelector({
    collections: collectionSelectorForPreview
})

export default connect(mapStateToProps)(CollectionOverview);