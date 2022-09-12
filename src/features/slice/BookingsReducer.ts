import { createSlice } from "@reduxjs/toolkit";
import { BookingsReducerState } from "../../app/state";
import { GetBookingsThunk } from "../../functions/get";
import { DeclineBookingThunk } from "../../functions/post";

export default createSlice({
  name: "BookingsReducer",
  initialState: BookingsReducerState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetBookingsThunk.fulfilled, (state, action) => {
        state.bookings = action.payload;
      })
      .addCase(DeclineBookingThunk.fulfilled, (state, action) => {
        state.bookings = action.payload.data;
      });
  },
}).reducer;
