import { createSlice } from "@reduxjs/toolkit";
import { StudentBookRoomThunk, StudentLoginThunk } from "../../functions/post";
import { StudentReducerState } from "../../state";

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
        state.student = action.payload;
      })
      .addCase(StudentBookRoomThunk.fulfilled, (state, action) => {
        state.student = action.payload;
      });
  },
});

export default StudentReducer.reducer;
export const { InitLogout } = StudentReducer.actions;
