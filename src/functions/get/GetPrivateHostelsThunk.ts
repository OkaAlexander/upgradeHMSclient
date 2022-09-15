import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetRoutes } from "../../api";
import controller from "../../controller";
import PrivateHostelModel from "../../model/PrivateHostelModel";

export default createAsyncThunk("private/hostels/get", async () => {
  try {
    return await controller.Get<PrivateHostelModel[]>({
      url: GetRoutes.private_hostels_get,
    });
  } catch (error) {
    throw error;
  }
});
