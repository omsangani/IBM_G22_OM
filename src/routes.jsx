import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./AuthPages/Login";
import Signup from "./AuthPages/Signup";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login  />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;
