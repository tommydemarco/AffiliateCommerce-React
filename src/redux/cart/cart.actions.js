import CartTypes from './cart.types'

export const toggleCart = () => ({ 
    type: CartTypes.TOGGLE_CART,
})

export const addItemToCart = (item) => ({
    type: CartTypes.ADD_ITEM, 
    payload: item
})