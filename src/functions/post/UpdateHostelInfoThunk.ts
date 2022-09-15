import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostRoutes } from "../../api";
import controller from "../../controller";

export default createAsyncThunk("api/hostel/update", async (data: any) => {
  try {
    return await controller.Post<string>({
      url: PostRoutes.hostel_info_update,
      data,
    });
  } catch (error) {
    throw error;
  }
});
