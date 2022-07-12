import { createSlice } from "@reduxjs/toolkit";
import { GetRoomsThunk } from "../../functions/thunk";
import { RoomsReducerState } from "../../state";

export default createSlice({
  name: "RoomsReducer",
  initialState: RoomsReducerState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetRoomsThunk.fulfilled, (state, action) => {
      state.rooms = action.payload;
    });
  },
}).reducer;
