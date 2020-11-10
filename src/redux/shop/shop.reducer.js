import SHOP_DATA from './shop.initialstate'
import ShopTypes from './shop.types'
const INITIAL_STATE = {
    collections: SHOP_DATA
}


const shopReducer = ( state = INITIAL_STATE, action ) => {
    switch( action.type ) {
        case ShopTypes.FETCH_PRODUCTS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state
    }
}

export default shopReducer;