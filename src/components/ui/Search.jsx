import React, { useState, useContext, useCallback, useEffect } from "react";
import axios from "axios";
import LoadingContext from "../../context/LoadingContext/LoadingContext";
import LoadingSpinner from "./LoadingSpinner";
import Product from "./Product";
const Search = () => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [productData, setProductData] = useState([]);
  const [serachedProducts, setSearchedProducts] = useState([]);

  const [searchInput, setSearchInput] = useState("");
  const inputChangeHandlerHandler = (e) => {
    setSearchInput(e.target.value);
  };

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

  const querySubmitHandler = (e) => {
    e.preventDefault();
    const filteredProducts = productData.filter((product) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchedProducts(filteredProducts);

    setSearchInput("");
  };
  return (
    <>
      <form onSubmit={querySubmitHandler} className="search">
        <input
          className={"search-input"}
          type="search"
          placeholder="Enter product name to search..."
          onChange={inputChangeHandlerHandler}
          value={searchInput}
        />
        <button className={"btn--submit btn btn-custom "} type="submit">
          Search
        </button>
      </form>
      <h2 className="product-heading container ">All Searched Products</h2>
      {isLoading && <LoadingSpinner />}
      <div className="container py-5 grid grid--3-cols">
        {serachedProducts.length === 0 && (
          <p className="search-instruction">
            Please enter a product name to search 🙂
          </p>
        )}
        {serachedProducts.map((product) => {
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
    </>
  );
};

export default Search;
