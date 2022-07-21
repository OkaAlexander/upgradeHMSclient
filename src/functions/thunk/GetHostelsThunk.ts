/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { GetRoutes } from "./../../api/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import controller from "../../controller";
import HostelModel from "../../model/HostelModel";

export default createAsyncThunk("api/hostels/get", async () => {
  try {
    return controller.Get<HostelModel[]>({ url: GetRoutes.hostels });
  } catch (error) {
    throw error;
  }
});
