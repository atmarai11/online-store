import React, { useCallback, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LoadingContext from "../../../context/LoadingContext/LoadingContext";
import LoadingSpinner from "../LoadingSpinner";
import Card from "../Card";
import Cart from "./Cart";

const CartPage = () => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [cartData, setCartData] = useState([]);
  const userId = localStorage.getItem("userId");
  const getCartData = useCallback(async () => {
    const res = await axios.get(
      `https://fakestoreapi.com/carts/user/${userId}`
    );

    return res.data;
  }, [userId]);

  useEffect(() => {
    const setData = async () => {
      setIsLoading(true);
      const data = await getCartData();
      setCartData(data);
      setIsLoading(false);
    };

    setData();
  }, [setIsLoading, getCartData]);
  return (
    <>
      <Navbar />
      {cartData.map((data) => (
        <Cart
          key={data.id}
          date={data.date}
          cartId={data.id}
          userId={data.userId}
          products={data.products}
        />
      ))}
      <Footer />
    </>
  );
};

export default CartPage;
