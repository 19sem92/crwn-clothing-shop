import { CartActionTypes } from "./cart.types";

export const toggleDropdownShowStatus = () => ({
  type: CartActionTypes.TOGGLE_DROPDOWN_SHOW_STATUS
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
