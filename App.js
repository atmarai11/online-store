import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SearchPage from "./pages/SearchPage";

import ProductDetail from "./pages/ProductDetail";
import CartPage from "./components/ui/cart/CartPage";

const App = () => {
  const ProtectedRoute = (props) => {
    if (!localStorage.getItem("token")) {
      return <Navigate to="/" replace />;
    }

    return props.children;
  };
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/search"
        element={
          <ProtectedRoute>
            <SearchPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products/:id"
        element={
          <ProtectedRoute>
            <ProductDetail />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
