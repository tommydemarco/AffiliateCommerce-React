import React from 'react';
import './ShopPage.styles.scss';
//========> COMPONENTS 
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import CategoryPage from '../category/CategoryPage'
import TheSpinner from '../../components/the-spinner/TheSpinner'
//========> NESTED ROUTING 
import { Route } from 'react-router-dom'
//========> REDUX 
import { connect } from 'react-redux'
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions'
//========> RESELECT 
import { createStructuredSelector } from 'reselect'
import { isFetchingSelector, errorSelector } from '../../redux/shop/shop.selectors'

//being the shop page a component rendered through routing (the main routing in App.js)
//we have access to the properties: MATCH, HISTORY and LOCATION
class ShopPage extends React.Component {

    componentDidMount() {
        const { updateCollection } = this.props
        updateCollection()
    } 

    render() {
        const { isFetching, errorMessage } = this.props

        if (isFetching) {
            return <TheSpinner />
        }

        if(errorMessage) {
            return <p>{errorMessage} </p>
        }

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
        updateCollection: () => dispatch(fetchCollectionStartAsync())
    }
}
const mapStateToProps = createStructuredSelector({
    isFetching: isFetchingSelector,
    errorMessage: errorSelector
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);