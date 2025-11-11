import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Wishlist from "./Pages/Whishlist";  // ✅ fixed import
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Router>
      {/* ✅ Header visible on all pages */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/whishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
