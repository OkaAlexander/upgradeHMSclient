import { createSlice } from "@reduxjs/toolkit";
import {
  AddHostelThunk,
  GetAvailableRoomsThunk,
  RegisterStudentThunk,
  StudentBookRoomThunk,
  StudentLoginThunk,
} from "../../functions/post";
import {
  GetHostelsThunk,
  GetRoomsThunk,
  GetStudentsThunk,
} from "../../functions/thunk";
import { ResponseState } from "../../app/state";
import { GetBookingsThunk } from "../../functions/get";

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
      })
      .addCase(AddHostelThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.message = null;
      })
      .addCase(AddHostelThunk.fulfilled, (state, action) => {
        state.error = null;
        state.message = action.payload;
        state.loading = false;
      })
      .addCase(AddHostelThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(StudentLoginThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.message = null;
      })
      .addCase(StudentLoginThunk.fulfilled, (state) => {
        state.error = null;
        state.message = null;
        state.loading = false;
      })
      .addCase(StudentLoginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(StudentBookRoomThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.message = null;
      })
      .addCase(StudentBookRoomThunk.fulfilled, (state, action) => {
        state.error = null;
        state.message = action.payload.message;
        state.loading = false;
      })
      .addCase(StudentBookRoomThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(RegisterStudentThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.message = null;
      })
      .addCase(RegisterStudentThunk.fulfilled, (state, action) => {
        state.error = null;
        state.message = action.payload;
        state.loading = false;
      })
      .addCase(RegisterStudentThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(GetAvailableRoomsThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.message = null;
      })
      .addCase(GetAvailableRoomsThunk.fulfilled, (state) => {
        state.error = null;
        state.message = null;
        state.loading = false;
      })
      .addCase(GetAvailableRoomsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(GetBookingsThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.message = null;
      })
      .addCase(GetBookingsThunk.fulfilled, (state) => {
        state.error = null;
        state.message = null;
        state.loading = false;
      })
      .addCase(GetBookingsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      });
  },
});

export default ResponseReducer.reducer;
export const { clearResponse, responseFail, responseSuccess, responsePending } =
  ResponseReducer.actions;
