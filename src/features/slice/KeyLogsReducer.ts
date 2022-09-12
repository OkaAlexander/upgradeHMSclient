import { createSlice } from "@reduxjs/toolkit";
import { KeyLogsReducerState } from "../../app/state";
import { AddKeyLogThunk, GetKeyLogsThunk } from "../../functions/services";

export default createSlice({
  name: "KeyLogsReducer",
  initialState: KeyLogsReducerState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(AddKeyLogThunk.fulfilled, (state, action) => {
        state.keylogs = action.payload;
      })
      .addCase(GetKeyLogsThunk.fulfilled, (state, action) => {
        state.keylogs = action.payload;
      }),
}).reducer;
