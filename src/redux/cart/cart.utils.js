export const addItemsToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity +1} : {...cartItem}
        )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const deleteItemFromCart = (cartItems, cartItemToDelete) => {
    
    const updatedCartItems = cartItems.filter(cartItem => (
        cartItem.id !== cartItemToDelete.id
    ))

    return [...updatedCartItems]
}

export const reduceItemsInCart = (cartItems, cartItemToReduce) => {
    
    const itemToReduce = cartItems.find(cartItem => (
        cartItem.id === cartItemToReduce.id
    ))
    
    if (itemToReduce.quantity === 1) {
        return cartItems.filter((item) => item.id !== itemToReduce.id)
    }

    const updatedList = cartItems.map((item) => {
        if(item.id !== itemToReduce.id) {
            return {...item}
        } else {
            return {...item, quantity: item.quantity -1}
        }
    })



    return [...updatedList]
}