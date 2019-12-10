import React from "react";

import CustomButton from "../custome-button/custome-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;