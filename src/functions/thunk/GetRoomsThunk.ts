/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetRoutes } from "../../api";
import controller from "../../controller";
import RoomModel from "../../model/RoomModel";
export default createAsyncThunk("api/rooms/get", async (year?: string) => {
  try {
    return <RoomModel[]>await controller.Get<RoomModel[]>({
      url: GetRoutes.rooms(),
    });
  } catch (error) {
    throw error;
  }
});
