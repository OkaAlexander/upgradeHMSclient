import { createSlice } from "@reduxjs/toolkit";
import { StudentBookRoomThunk, StudentLoginThunk } from "../../functions/post";
import { StudentReducerState } from "../../app/state";

const StudentReducer = createSlice({
  name: "StudentReducer",
  initialState: StudentReducerState,
  reducers: {
    InitLogout: (state) => {
      state.student = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(StudentLoginThunk.fulfilled, (state, action) => {
        state.student = action.payload.data;
      })
      .addCase(StudentBookRoomThunk.fulfilled, (state, action) => {
        state.student = action.payload.data;
      });
  },
});

export default StudentReducer.reducer;
export const { InitLogout } = StudentReducer.actions;
