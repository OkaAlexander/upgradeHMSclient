import { combineReducers } from "@reduxjs/toolkit";

import {
  ResponseReducer,
  RoomsReducer,
  HostelsReducer,
  StudentsReducer,
  StudentReducer,
  AvailableRoomsReducer,
  BookingsReducer,
  KeyLogsReducer,
  PrivateHostelReducer,
} from "../features/slice";
export default combineReducers({
  ResponseReducer,
  RoomsReducer,
  HostelsReducer,
  StudentsReducer,
  KeyLogsReducer,
  StudentReducer,
  AvailableRoomsReducer,
  BookingsReducer,
  PrivateHostelReducer,
});
