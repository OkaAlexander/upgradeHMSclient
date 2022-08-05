import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AccountsPage,
  BookingInfoPreviewPage,
  BookingsPage,
  ComplainsPage,
  EntryPage,
  HostelInfoPage,
  KeylogsPage,
  ManageRoomInfoPage,
  ProfilePage,
  RegisterStudentPage,
  StudentIdPage,
  StudentsInfoPage,
  StudentsPage,
} from "../pages/admin/view";
import RoomInfoPage from "../pages/admin/view/RoomInfoPage";
import { Routes as routes } from "../routes";

export default function AdminRouter() {
  return (
    <Routes>
      <Route path="/admin" element={<EntryPage />}>
        <Route path={routes.CHECKINS} element={<RoomInfoPage />} />
        <Route path={routes.STUDENT} element={<StudentsInfoPage />} />
        <Route path={routes.BOOK} element={<RegisterStudentPage />} />
        <Route path={routes.ROOMS} element={<ManageRoomInfoPage />} />
        <Route path={routes.HOSTELS} element={<HostelInfoPage />} />
        <Route path={routes.COMPLAINS} element={<ComplainsPage />} />
        <Route path={routes.KEY_LOGS} element={<KeylogsPage />} />
        <Route path={routes.BOOKINGS} element={<BookingsPage />} />
        <Route path={routes.USERS} element={<AccountsPage />} />
        <Route path={routes.PROFILE} element={<ProfilePage />} />
        <Route path={routes.STUDENT_CARDS} element={<StudentIdPage />} />
        <Route path={routes.STUDENTS} element={<StudentsPage />} />
        <Route
          path={routes.BOOKING_INFO_PREVIEW}
          element={<BookingInfoPreviewPage />}
        />
      </Route>
    </Routes>
  );
}
