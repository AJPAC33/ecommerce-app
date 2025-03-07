import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";
import { EcommerceRoutes } from "../../ecommerce/routes/EcommerceRoutes";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      {/* <Route path="/*" element={<Navigate to="/auth/login" />} /> */}
      <Route path="/*" element={<EcommerceRoutes />} />
    </Routes>
  );
}
