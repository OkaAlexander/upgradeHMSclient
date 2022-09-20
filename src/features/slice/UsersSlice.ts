import { createSlice } from "@reduxjs/toolkit";
import { UsersReducerState } from "../../app/state";
import { GetUsersThunk } from "../../functions/auth";

const UsersReducer = createSlice({
  name: "UsersReducer",
  initialState: UsersReducerState,
  reducers: {
    SetUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetUsersThunk.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export default UsersReducer.reducer;
export const { SetUsers } = UsersReducer.actions;
