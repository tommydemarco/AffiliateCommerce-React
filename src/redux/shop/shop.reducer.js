import ShopTypes from './shop.types'
const INITIAL_STATE = {
    collections: null,
    isFetching: true,
    errorMessage: null
}


const shopReducer = ( state = INITIAL_STATE, action ) => {
    switch( action.type ) {
        case ShopTypes.FETCH_COLLECTION_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopTypes.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isFetching: false
            }
        case ShopTypes.FETCH_COLLECTION_ERROR:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default shopReducer;