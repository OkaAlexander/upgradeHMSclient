import React from "react";
import { BrowserRouter } from "react-router-dom";
import AdminRouter from "./AdminRouter";
import StudentRouter from "./StudentRouter";

export default function Router() {
  return (
    <BrowserRouter>
      <AdminRouter />
      <StudentRouter />
    </BrowserRouter>
  );
}
