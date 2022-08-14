import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostRoutes } from "../../api";
import controller from "../../controller";
import StudentModel from "../../model/StudentModel";

export default createAsyncThunk(
  "api/booking/approve",
  async (data: StudentModel) => {
    try {
      return await controller.Post<string>({
        url: PostRoutes.approve_booking,
        data,
      });
    } catch (error) {
      throw error;
    }
  }
);
