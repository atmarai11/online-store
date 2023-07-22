import React, { useCallback, useState } from "react";
import axios from "axios";
import CartProduct from "./CartProduct";
import Card from "../Card";

const Cart = ({ userId, date, cartId, products }) => {
  const cartdate = new Date(date);
  return (
    <>
      <h2 className="cart-heading">Your Cart</h2>
      <Card className="cart-card">
        <div className="cart-container">
          {products.map((product) => (
            <CartProduct
              productId={product.productId}
              quantity={product.quantity}
              cartdate={cartdate}
            />
          ))}
        </div>
        <button className="btn btn-custom btn-success cart-action-btn">
          Checkout
        </button>
      </Card>
    </>
  );
};
export default Cart;
