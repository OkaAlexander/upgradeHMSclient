import { createSlice } from "@reduxjs/toolkit";
import { GetHostelsThunk } from "../../functions/thunk";
import { HostelReducerState } from "../../app/state";

export default createSlice({
  name: "HostelsReducer",
  initialState: HostelReducerState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetHostelsThunk.fulfilled, (state, action) => {
      state.hostels = action.payload;
    });
  },
}).reducer;
