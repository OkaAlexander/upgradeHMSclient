import { endPoints } from "./../../api/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import controller from "../../controller";
import StudentModel from "../../model/StudentModel";

export default createAsyncThunk("api/students/get", async () => {
  try {
    return <StudentModel[]>await controller({ url: endPoints.fetch_students });
  } catch (error) {
    throw error;
  }
});
