import { createSlice } from "@reduxjs/toolkit";
import { GetRoomsThunk, RoomThunk } from "../../functions/thunk";
import { RoomsReducerState } from "../../app/state";

export default createSlice({
  name: "RoomsReducer",
  initialState: RoomsReducerState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetRoomsThunk.fulfilled, (state, action) => {
        state.rooms = action.payload;
      })
      .addCase(RoomThunk.fulfilled, (state, action) => {
        state.rooms = action.payload.data;
      });
  },
}).reducer;
