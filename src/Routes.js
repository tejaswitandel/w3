import React from "react";
import MyAccount from "pages/MyAccount";
import SignUp from "pages/SignUp";
import Login from "pages/Login";
import Contact from "pages/Contact";
import Shop from "pages/Shop";
import Checkout from "pages/Checkout";
import Wishlist from "pages/Wishlist";
import DetailProduct from "pages/DetailProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/detailproduct" element={<DetailProduct />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myaccount" element={<MyAccount />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
