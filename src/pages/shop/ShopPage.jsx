import React from 'react';
import './ShopPage.styles.scss';
//========> COMPONENTS 
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import CategoryPage from '../category/CategoryPage'
//========> NESTED ROUTING 
import { Route } from 'react-router-dom'

//being the shop page a component rendered through routing (the main routing in App.js)
//we have access to the properties: MATCH, HISTORY and LOCATION
const ShopPage = ({ match }) => {
    return(
        <div className="shop-page">
            <Route exact path={match.path} component={CollectionsOverview} />
            <Route exact path={`${match.path}/:categoryId`} component={CategoryPage} />
        </div>
    )
}

export default ShopPage;