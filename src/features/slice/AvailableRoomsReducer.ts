import { createSlice } from "@reduxjs/toolkit";
import { GetAvailableRoomsThunk } from "../../functions/post";
import { RoomsReducerState } from "../../state";

export default createSlice({
  name: "AvailableRoomsReducer",
  initialState: RoomsReducerState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAvailableRoomsThunk.fulfilled, (state, action) => {
      state.rooms = action.payload;
    });
  },
}).reducer;
