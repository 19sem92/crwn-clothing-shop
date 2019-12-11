import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";
import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  item,
  clearItemFromCart,
  increaseQuantity,
  decreaseQuantity
}) => {
  const { name, quantity, price, imageUrl } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name"> {name} </span>
      <div className="quantity">
        <div onClick={() => decreaseQuantity(item)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => increaseQuantity(item)} className="arrow">
          &#10095;
        </div>
      </div>
      <span className="price"> {price} </span>
      <div onClick={() => clearItemFromCart(item.id)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: itemId => dispatch(clearItemFromCart(itemId)),
  increaseQuantity: item => dispatch(addItem(item)),
  decreaseQuantity: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
