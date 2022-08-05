import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetRoutes } from "../../api";
import controller from "../../controller";
import BookingsModel from "../../model/BookingsModel";

export default createAsyncThunk("api/bookings/get", async () => {
  try {
    return await controller.Get<BookingsModel[]>({ url: GetRoutes.bookings() });
  } catch (error) {
    throw error;
  }
});
