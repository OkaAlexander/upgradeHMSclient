import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostRoutes } from "../../api";
import controller from "../../controller";
import BookingsModel from "../../model/BookingsModel";

export default createAsyncThunk("api/booking/decline", async (data: any) => {
  try {
    return await controller.Post<{ data: BookingsModel[]; message: string }>({
      url: PostRoutes.decline_booking,
      data,
    });
  } catch (error) {
    throw error;
  }
});
