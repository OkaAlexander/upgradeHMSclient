import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostRoutes } from "../../api";
import controller from "../../controller";

interface IProps {
  data: any;
  file?: boolean;
  route: string;
}
export default createAsyncThunk(
  "api/private/hostel/add",
  async ({ data, file, route }: IProps) => {
    try {
      return await controller.Post<string>({
        url: route,
        data,
        file: file,
      });
    } catch (error) {
      throw error;
    }
  }
);
