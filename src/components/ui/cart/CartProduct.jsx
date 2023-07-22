import React, { useCallback, useContext, useEffect, useState } from "react";

import axios from "axios";
import LoadingContext from "../../../context/LoadingContext/LoadingContext";
import Card from "../Card";
import LoadingSpinner from "../LoadingSpinner";

const CartProduct = ({ productId, cartdate, quantity }) => {
  const Year = cartdate.getFullYear();
  const Month = cartdate.getMonth();
  const Day = cartdate.getDate();
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  const [cartProductData, setCartProductData] = useState([]);

  const getProductData = useCallback(async () => {
    const res = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );

    console.log(res.data);
    return res.data;
  }, [productId]);

  useEffect(() => {
    const setCart = async () => {
      setIsLoading(true);
      const data = await getProductData();
      setCartProductData(data);
      setIsLoading(false);
    };

    setCart();
  }, [setIsLoading, getProductData]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className="cart-content">
        <img src={cartProductData.image} alt="categorywise product" />

        <div className="cart-text">
          <p className="cart-name">{cartProductData.title}</p>

          <p className="cart-quantity">Quantity: {quantity}</p>
          <p className="cart-price">
            Total Price: $ {cartProductData.price * quantity}
          </p>
          <div className="cart-date">
            Date Added: {Year}/{Month}/{Day}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
