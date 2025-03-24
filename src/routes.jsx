import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./AuthPages/Login";
import Signup from "./AuthPages/Signup";
import ForgotPass from "./AuthPages/ForgotPass";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/main";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login  />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPass />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/' element={<Main />} />
    </Routes>
  );
};

export default AppRoutes;
