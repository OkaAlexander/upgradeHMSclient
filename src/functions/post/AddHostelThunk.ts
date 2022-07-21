import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostRoutes } from "../../api";
import controller from "../../controller";

export default createAsyncThunk("api/hostel/add", async (data: any) => {
  try {
    return await controller.Post<string>({
      url: PostRoutes.school_hostel_add,
      data,
    });
  } catch (error) {
    throw error;
  }
});
