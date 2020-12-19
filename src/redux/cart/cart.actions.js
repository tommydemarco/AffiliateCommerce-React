import CartTypes from "./cart.types";

export const toggleCart = () => ({
  type: CartTypes.TOGGLE_CART,
});

export const addItemToCart = (item) => ({
  type: CartTypes.ADD_ITEM,
  payload: item,
});

export const deleteItemFromCart = (item) => ({
  type: CartTypes.DELETE_ITEM,
  payload: item,
});

export const reduceItemsInCart = (item) => ({
  type: CartTypes.REDUCE_ITEM,
  payload: item,
});

export const clearCart = () => {
  return {
    type: CartTypes.CLEAR_CART,
  };
};
