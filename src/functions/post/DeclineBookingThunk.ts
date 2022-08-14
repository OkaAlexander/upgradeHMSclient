import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostRoutes } from "../../api";
import controller from "../../controller";

export default createAsyncThunk("api/booking/decline", async (data: any) => {
  try {
    return await controller.Post<string>({
      url: PostRoutes.decline_booking,
      data,
    });
  } catch (error) {
    throw error;
  }
});
