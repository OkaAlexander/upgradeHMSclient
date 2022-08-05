import { createSlice } from "@reduxjs/toolkit";
import { GetStudentsThunk } from "../../functions/thunk";
import { StudentsReducerState } from "../../app/state";

export default createSlice({
  name: "StudentsReducer",
  initialState: StudentsReducerState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetStudentsThunk.fulfilled, (state, action) => {
      state.students = action.payload;
    });
  },
}).reducer;
