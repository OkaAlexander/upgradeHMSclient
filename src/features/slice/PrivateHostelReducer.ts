import { createSlice } from "@reduxjs/toolkit";
import { PrivateHostelsReducerStaste } from "../../app/state";
import { GetPrivateHostelsThunk } from "../../functions/get";

export default createSlice({
  name: "PrivateHostelsReducer",
  initialState: PrivateHostelsReducerStaste,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetPrivateHostelsThunk.fulfilled, (state, action) => {
      state.privateHostels = action.payload;
    });
  },
}).reducer;
