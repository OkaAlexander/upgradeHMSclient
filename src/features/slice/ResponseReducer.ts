import { createSlice } from "@reduxjs/toolkit";
import {
  GetHostelsThunk,
  GetRoomsThunk,
  GetStudentsThunk,
} from "../../functions/thunk";
import { ResponseState } from "../../state";

const ResponseReducer = createSlice({
  name: "ResponseReducer",
  reducers: {
    clearResponse: (state) => {
      state.error = null;
      state.message = null;
      state.loading = false;
    },
    responseFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.message = null;
    },
    responseSuccess: (state, action) => {
      state.error = null;
      state.message = action.payload;
      state.loading = false;
    },
    responsePending: (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
  },
  initialState: ResponseState,
  extraReducers: (builder) => {
    builder
      .addCase(GetRoomsThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.message = null;
      })
      .addCase(GetRoomsThunk.fulfilled, (state) => {
        state.error = null;
        state.message = null;
        state.loading = false;
      })
      .addCase(GetRoomsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(GetHostelsThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.message = null;
      })
      .addCase(GetHostelsThunk.fulfilled, (state) => {
        state.error = null;
        state.message = null;
        state.loading = false;
      })
      .addCase(GetHostelsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(GetStudentsThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.message = null;
      })
      .addCase(GetStudentsThunk.fulfilled, (state) => {
        state.error = null;
        state.message = null;
        state.loading = false;
      })
      .addCase(GetStudentsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      });
  },
});

export default ResponseReducer.reducer;
export const { clearResponse, responseFail, responseSuccess, responsePending } =
  ResponseReducer.actions;
