import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetRoutes } from "../../api";
import controller from "../../controller";
import KeylogModel from "../../model/KeylogModel";

export default createAsyncThunk("api/keylogs/get", async () => {
  try {
    return await controller.Get<KeylogModel[]>({
      url: GetRoutes.keylogs_get(),
    });
  } catch (error) {
    throw error;
  }
});
