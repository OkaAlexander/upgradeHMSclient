import { createAsyncThunk } from "@reduxjs/toolkit";
import { endPoints } from "../../api";
import controller from "../../controller";
import RoomModel from "../../model/RoomModel";

export default createAsyncThunk("api/rooms/get", async () => {
  try {
    return <RoomModel[]>await controller({ url: endPoints.getRooms });
  } catch (error) {
    throw error;
  }
});
