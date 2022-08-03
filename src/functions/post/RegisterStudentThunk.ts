import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostRoutes } from "../../api";
import controller from "../../controller";

export default createAsyncThunk(
  "api/booking/student/register",
  async (data: any) => {
    try {
      return controller.Post<string>({
        url: PostRoutes.student_register,
        data,
        file: true,
      });
    } catch (error) {
      throw error;
    }
  }
);
