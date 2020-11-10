import React from 'react';
import './ShopPage.styles.scss';
//========> COMPONENTS 
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import CategoryPage from '../category/CategoryPage'
//========> NESTED ROUTING 
import { Route } from 'react-router-dom'
//========> FIREBASE 
import { firestore, convertCollectionArrayToMap } from '../../firebase/firebase.utils'
//========> REDUX 
import { connect } from 'react-redux'
import { addItemsToShop } from '../../redux/shop/shop.actions'

//being the shop page a component rendered through routing (the main routing in App.js)
//we have access to the properties: MATCH, HISTORY and LOCATION
class ShopPage extends React.Component {

    unsubscribeFromSnapshot = null

    componentDidMount() {
        const { updateCollection } = this.props

        const collectionRef = firestore.collection('collections')

        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionArrayToMap(snapshot)
            updateCollection(collectionMap)
        })
    }

    render() {
        const { match } = this.props 
        return(
            <div className="shop-page">
                <Route exact path={match.path} component={CollectionsOverview} />
                <Route exact path={`${match.path}/:categoryId`} component={CategoryPage} />
            </div>
        )
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        updateCollection: collectionMap => dispatch(addItemsToShop(collectionMap))
    }
}

export default connect(null, mapDispatchToProps)(ShopPage);