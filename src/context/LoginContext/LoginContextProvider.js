import React, { useState, useEffect } from "react";

import axios from "axios";

import LoginContext from "./LoginContext";
import { useNavigate } from "react-router-dom";

const LoginContextProvider = (props) => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [inValidCredentials, setInvalidCredentials] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = async (username, password) => {
    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: username,
        password: password,
      });
      if (response.status === 200) {
        setIsLoggedIn(true);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", 2);
        navigate("/home");
      }
    } catch (err) {
      setInvalidCredentials(true);
      console.log(err);
    }
  };

  const logOutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  const loginContext = {
    isLoggedIn,
    inValidCredentials,
    setInvalidCredentials,
    setIsLoggedIn: loginHandler,
    logOutHandler,
  };

  return (
    <LoginContext.Provider value={loginContext}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
