import React, { useContext, useState } from "react";

import Form from "../components/ui/Form";
import Input from "../components/ui/Input";
import LoginImg from "../assets/images/login.jpg";
import LoginContext from "../context/LoginContext/LoginContext";

import Navbar from "../components/ui/Navbar";

const Login = () => {
  const LoginCtx = useContext(LoginContext);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const resetError = () => {
    setUsernameError(false);
    setPasswordError(false);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    resetError();
    if (username.length === 0) {
      setUsernameError(true);
      return;
    }
    if (password.length === 0) {
      setPasswordError(true);
      return;
    }
    LoginCtx.setIsLoggedIn(username, password);
  };
  return (
    <>
      <Navbar />
      <Form
        img={LoginImg}
        heading="Login to your account"
        onSubmit={onSubmitHandler}
      >
        <Input
          type="text"
          id="username"
          placeholder="Enter username"
          label="Username"
          onChanged={usernameChangeHandler}
        />
        {usernameError && (
          <p className="error-message">Username cannot be empty </p>
        )}
        <Input
          type="password"
          id="password"
          placeholder="Enter your password"
          label="Password"
          onChanged={passwordChangeHandler}
        />
        {passwordError && (
          <p className="error-message">Password cannot be empty</p>
        )}
        <button className="btn-custom btn-login">Login</button>
      </Form>
    </>
  );
};

export default Login;
