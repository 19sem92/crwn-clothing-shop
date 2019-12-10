import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  isShowDropdown: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_DROPDOWN_SHOW_STATUS:
      return { ...state, isShowDropdown: !state.isShowDropdown };
    default:
      return state;
  }
};

export default cartReducer;
