import { combineReducers } from "@reduxjs/toolkit";

import {
  ResponseReducer,
  RoomsReducer,
  HostelsReducer,
  StudentsReducer,
} from "../features/slice";
export default combineReducers({
  ResponseReducer,
  RoomsReducer,
  HostelsReducer,
  StudentsReducer,
});
