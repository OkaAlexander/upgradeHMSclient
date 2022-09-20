import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostRoutes } from "../../api";
import controller from "../../controller";
import UserModel from "../../model/UserModel";

export default createAsyncThunk("api/users/get", async (data: any) => {
  try {
    return await controller.Post<UserModel[]>({
      url: PostRoutes.users_get,
      data,
    });
  } catch (error) {
    throw error;
  }
});
