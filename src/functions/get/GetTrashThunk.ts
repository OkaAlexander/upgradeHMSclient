import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetRoutes } from "../../api";
import controller from "../../controller";
import TrashModel from "../../model/TrashModel";

export default createAsyncThunk("api/booking/decline/get", async () => {
  try {
    return await controller.Get<TrashModel[]>({ url: GetRoutes.trash() });
  } catch (error) {
    throw error;
  }
});
