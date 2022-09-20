import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AdminAuthenticationPage,
  AdminLoginPage,
  AdminRegisterPage,
  AdminPendingAccountPage,
  ResetPasswordPage,
  NewPasswordPage,
} from "../pages/admin/auth";

export default function AdminAuthRouter() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminAuthenticationPage />}>
        <Route path="login" element={<AdminLoginPage />} />
        <Route path="register" element={<AdminRegisterPage />} />
        <Route path="pending" element={<AdminPendingAccountPage />} />
        <Route path="password/reset" element={<ResetPasswordPage />} />
        <Route path="password/change" element={<NewPasswordPage />} />
      </Route>
    </Routes>
  );
}
