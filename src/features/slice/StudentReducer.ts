import { createSlice } from "@reduxjs/toolkit";
import { StudentBookRoomThunk, StudentLoginThunk } from "../../functions/post";
import { StudentReducerState } from "../../app/state";
import StudentModel from "../../model/StudentModel";

const StudentReducer = createSlice({
  name: "StudentReducer",
  initialState: StudentReducerState,
  reducers: {
    InitLogout: (state) => {
      state.student = null;
    },
    setStudent: (state, action: { payload: StudentModel | null }) => {
      state.student = action.payload;
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
export const { InitLogout, setStudent } = StudentReducer.actions;
