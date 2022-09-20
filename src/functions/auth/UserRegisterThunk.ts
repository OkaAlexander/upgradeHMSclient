import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostRoutes } from "../../api";
import controller from "../../controller";
import UserModel from "../../model/UserModel";

export default createAsyncThunk("api/user/register", async (data: any) => {
  try {
    return await controller.Post<{ data: UserModel; message: string }>({
      url: PostRoutes.user_register,
      data,
    });
  } catch (error) {
    throw error;
  }
});
