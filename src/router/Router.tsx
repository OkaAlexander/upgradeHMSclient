import React from "react";
import { BrowserRouter } from "react-router-dom";
import AdminAuthRouter from "./AdminAuthRouter";
import AdminRouter from "./AdminRouter";
import StudentRouter from "./StudentRouter";

export default function Router() {
  return (
    <BrowserRouter>
      <AdminAuthRouter />
      <AdminRouter />
      <StudentRouter />
    </BrowserRouter>
  );
}
