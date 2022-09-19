import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AdminAuthenticationPage,
  AdminLoginPage,
  AdminRegisterPage,
} from "../pages/admin/auth";

export default function AdminAuthRouter() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminAuthenticationPage />}>
        <Route path="login" element={<AdminLoginPage />} />
        <Route path="register" element={<AdminRegisterPage />} />
      </Route>
    </Routes>
  );
}
