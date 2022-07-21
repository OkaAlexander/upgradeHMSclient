import { GetRoutes } from "./../../api/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import controller from "../../controller";
import StudentModel from "../../model/StudentModel";
import moment from "moment";

export default createAsyncThunk("api/students/get", async (year?: string) => {
  try {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return <StudentModel[]>await controller.Get<StudentModel[]>({
      url: GetRoutes.students(),
    });
  } catch (error) {
    throw error;
  }
});
