import CartTypes from './cart.types'
import { addItemsToCart } from './cart.utils'

const INITIAL_STATE = {
    cartDisplay: false,
    cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.TOGGLE_CART: 
            return {
                ...state,
                cartDisplay: !state.cartDisplay
            }
        case CartTypes.ADD_ITEM:
            return {
                ...state, 
                cartItems: addItemsToCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;