import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostRoutes } from "../../api";
import controller from "../../controller";
import StudentModel from "../../model/StudentModel";

export default createAsyncThunk(
  "api/student/hostel/book",
  async (data: StudentModel) => {
    try {
      return await controller.Post<StudentModel>({
        url: PostRoutes.hostel_book,
        data,
      });
    } catch (error) {
      throw error;
    }
  }
);
