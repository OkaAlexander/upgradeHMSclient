import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostRoutes } from "../../api";
import controller from "../../controller";
import RoomModel from "../../model/RoomModel";

export default createAsyncThunk(
  "api/rooms/get/available",
  async (data: any) => {
    try {
      return await controller.Post<RoomModel[]>({
        url: PostRoutes.get_available_rooms,
        data,
      });
    } catch (error) {
      throw error;
    }
  }
);
