import { endPoints } from "./../../api/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import controller from "../../controller";
import HostelModel from "../../model/HostelModel";

export default createAsyncThunk("api/hostels/get", async () => {
  try {
    return <HostelModel[]>await controller({ url: endPoints.getHostels });
  } catch (error) {
    throw error;
  }
});
