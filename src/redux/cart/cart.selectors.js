import { createSelector } from 'reselect'

//=====> INPUT SELECTOR
/////////select one slice of the state 
const selectCart = state => state.cart

//=====> CREATE SELECTOR
/////////uses the input selector to return a particular property of the slice of state
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => {
        return (
            cart.cartItems
        )
    }
)
//this is a memoised selector, cause it will use caching to re-render the component
//ONLY IF NECESSARY 

export const selectCartItemsCount = createSelector(
    //this takes in the array the already created selector
    [selectCartItems],
    (cartItems) => {
        let itemCount = 0;
        if(cartItems.length) {
            cartItems.forEach(item => {
                itemCount += item.quantity
            })
        } 
        return itemCount
    }
)

export const selectCartTotal = createSelector(
    [selectCartItems], 
    (cartItems) => {
        let totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += item.quantity * item.price;
        })
        return totalPrice;
    }
)