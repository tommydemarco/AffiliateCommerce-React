import ShopTypes from './shop.types'

export const addItemsToShop = ( collectionMap ) => {
    return {
        type: ShopTypes.FETCH_PRODUCTS,
        payload: collectionMap
    }
}