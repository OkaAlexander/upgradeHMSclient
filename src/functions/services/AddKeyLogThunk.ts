import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostRoutes } from "../../api";
import controller from "../../controller";
import KeylogModel from "../../model/KeylogModel";

export default createAsyncThunk("api/keylog/add", async (data: any) => {
  try {
    return await controller.Post<KeylogModel[]>({
      url: PostRoutes.keylog_add,
      data,
    });
  } catch (error) {
    throw error;
  }
});
