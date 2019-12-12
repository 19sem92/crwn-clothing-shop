import { CartActionTypes } from "./cart.types";

export const toggleDropdownShowStatus = () => ({
  type: CartActionTypes.TOGGLE_DROPDOWN_SHOW_STATUS
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = itemId => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: itemId
});
