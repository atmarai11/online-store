import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Product from "../components/ui/Product";
import LoadingContext from "../context/LoadingContext/LoadingContext";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const HomePage = () => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [productData, setProductData] = useState([]);

  const getProductData = useCallback(async () => {
    const res = await axios.get("https://fakestoreapi.com/products");

    return res.data;
  }, []);

  useEffect(() => {
    const setData = async () => {
      setIsLoading(true);
      const data = await getProductData();
      setProductData(data);
      setIsLoading(false);
    };

    setData();
  }, [setIsLoading, getProductData]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <Navbar />
      <h2 className="product-heading container ">All Products</h2>
      <div className="container py-5 grid grid--3-cols">
        {productData.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              price={product.price}
              name={product.title}
              image={product.image}
              rating={product.rating.rate}
              count={product.rating.count}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};
export default HomePage;
