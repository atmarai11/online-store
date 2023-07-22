import React from "react";

const LoginContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: (username, password) => {},
  logOutHandler: () => {},
  setInvalidCredentials: (invalidState) => {},
  inValidCredentials: false,
});

export default LoginContext;
