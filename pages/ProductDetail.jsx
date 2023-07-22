import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import LoadingContext from "../context/LoadingContext/LoadingContext";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const ProductDetail = () => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  const [productData, setProductData] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const id = pathname.split("/")[2];
    const getBlogData = async () => {
      setIsLoading(true);

      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);

      setProductData(res.data);
      setIsLoading(false);
    };
    getBlogData();
  }, [pathname, setIsLoading]);
  return (
    <>
      {isLoading && <LoadingSpinner />}
      <Navbar />
      <div className="product-content container py-5 grid--2-cols">
        <img
          className="product-img"
          src={productData.image}
          alt="individual product"
        />
        <div className="product-details">
          <h2 className="product-category">
            <span className="category">Category:</span>
            <span className="category-type">{productData.category}</span>
          </h2>

          <h3 className="product-title">{productData.title}</h3>
          <p className="product-money">${productData.price}</p>
          <p className="product-description">{productData.description}</p>
          <button className="btn btn-custom btn-success btn-product-cart">
            Add to Cart
          </button>
          {/* <p className="product-rating">
            {productData.rating}
            {productData.count}
          </p> */}
        </div>
      </div>

      <Footer />
    </>
  );
};
export default ProductDetail;
