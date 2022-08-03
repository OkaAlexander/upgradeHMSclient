import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  DashboardPage,
  StudentProfilePage,
} from "../pages/student/profile/view";
import {
  AboutPage,
  EntryPage,
  GalleryPage,
  HostelsPage,
  LoginPage,
  ShopPage,
  HostelInfoPage,
} from "../pages/student/view";

export default function StudentRouter() {
  return (
    <Routes>
      <Route path="/" element={<EntryPage />}>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/hostels" element={<HostelsPage />} />
        <Route path="/" element={<LoginPage />} />
      </Route>
      <Route path="/dashboard" element={<DashboardPage />}>
        <Route path="hostels" element={<HostelsPage />} />
        <Route path="profile" element={<StudentProfilePage />} />
        <Route path="hostels/:id" element={<HostelInfoPage />} />
      </Route>
    </Routes>
  );
}
