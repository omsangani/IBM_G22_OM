import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./AuthPages/Login";
import Signup from "./AuthPages/Signup";
import ForgotPass from "./AuthPages/ForgotPass";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login  />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPass />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
