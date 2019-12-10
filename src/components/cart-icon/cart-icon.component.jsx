import React from "react";

import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";
import { toggleDropdownShowStatus } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleDropdownShowStatus }) => (
  <div className="cart-icon" onClick={toggleDropdownShowStatus}>
    <ShoppingIcon className="item-count" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleDropdownShowStatus: () => dispatch(toggleDropdownShowStatus())
});

export default connect(null, mapDispatchToProps)(CartIcon);
