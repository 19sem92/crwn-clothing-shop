import React from "react";

import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import "./cart-icon.styles.scss";
import { toggleDropdownShowStatus } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleDropdownShowStatus, cartItems }) => (
  <div className="cart-icon" onClick={toggleDropdownShowStatus}>
    <ShoppingIcon className="item-count" />
    <span className="item-count">{cartItems}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleDropdownShowStatus: () => dispatch(toggleDropdownShowStatus())
});

const mapStateToProps = state => ({
  cartItems: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
