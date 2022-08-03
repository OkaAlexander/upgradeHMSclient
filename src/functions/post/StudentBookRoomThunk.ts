import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostRoutes } from "../../api";
import controller from "../../controller";
import StudentModel from "../../model/StudentModel";

interface res {
  data: StudentModel;
  message: string;
}
export default createAsyncThunk(
  "api/student/hostel/book",
  async (data: StudentModel) => {
    try {
      const res = await controller.Post<res>({
        url: PostRoutes.hostel_book,
        data,
      });
      console.log(res);
      return res;
    } catch (error) {
      throw error;
    }
  }
);
