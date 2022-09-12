import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostRoutes } from "../../api";
import controller from "../../controller";
import StudentModel from "../../model/StudentModel";

export default createAsyncThunk("api/student/login", async (data: any) => {
  try {
    return await controller.Post<{ data: StudentModel; message: string }>({
      url: PostRoutes.student_login,
      data,
    });
  } catch (error) {
    throw error;
  }
});
