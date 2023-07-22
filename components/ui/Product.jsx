import React from "react";
import { NavLink } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import Card from "./Card";

const Product = ({ image, price, name, rating, count, id }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<AiFillStar />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<AiOutlineStar />);
    } else {
      stars.push(<AiOutlineStar />);
    }
  }

  return (
    <>
      <Card classname="product-container">
        <img className="product-img" src={image} alt="Product" />
        <h3 className="product-name">
          <NavLink to={`/products/${id}`}>{name}</NavLink>
        </h3>
        <div className="product-rating d-flex">
          <div className="stars">{stars}</div>
          <div className="count">({count} ratings) </div>
        </div>
        <p className="product-price">${price}</p>
        <div className="product-action d-flex">
          <button className="btn btn-custom btn-success btn-cart">
            Add to Cart
          </button>
          <button className="btn btn-custom btn-success btn-detail">
            <NavLink to={`/products/${id}`}>View Detail</NavLink>
          </button>
        </div>
      </Card>
    </>
  );
};
export default Product;
