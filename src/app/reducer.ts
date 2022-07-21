import { combineReducers } from "@reduxjs/toolkit";

import {
  ResponseReducer,
  RoomsReducer,
  HostelsReducer,
  StudentsReducer,
  StudentReducer,
} from "../features/slice";
export default combineReducers({
  ResponseReducer,
  RoomsReducer,
  HostelsReducer,
  StudentsReducer,
  StudentReducer,
});
