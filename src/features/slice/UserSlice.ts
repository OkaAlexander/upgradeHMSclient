import { createSlice } from "@reduxjs/toolkit";
import { UserReducerState } from "../../app/state";
import { UserLoginThunk, UserRegisterThunk } from "../../functions/auth";

const UserReducer = createSlice({
  name: "UserReducer",
  initialState: UserReducerState,
  reducers: {
    UserLogout: (state) => {
      state.user = null;
    },
    SetUser: (state, action) => {
      state.user = action.payload;
    },
    SetHostel: (state, action) => {
      state.hostel = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UserLoginThunk.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(UserRegisterThunk.fulfilled, (state, action) => {
        state.user = action.payload.data;
      });
  },
});

export default UserReducer.reducer;
export const { UserLogout, SetUser, SetHostel } = UserReducer.actions;
