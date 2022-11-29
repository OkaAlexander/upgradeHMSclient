import { createAsyncThunk } from "@reduxjs/toolkit";
import { Controller } from "../../controller";
import RoomModel from "../../model/RoomModel";

interface IProps {
  method?: "get" | "post" | "put" | "delete" | "patch";
  url?: string;
  data?: any;
  token?: string;
}
export default createAsyncThunk(
  "api/room",
  async ({ method, url, data, token }: IProps) => {
    try {
      return await Controller<{ data: RoomModel[]; message: string }>({
        method,
        data,
        url,
        token,
      });
    } catch (error) {
      throw error;
    }
  }
);
