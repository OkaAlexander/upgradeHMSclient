import {
  IBookingsReducerState,
  IHostelReducer,
  IKeyLogsReducerState,
  IRoomReducer,
  IStudentReducer,
  IStudentsReducer,
} from "./IReducer";
import ResponseModel from "../../model/ResponseModel";
export const ResponseState: ResponseModel = {
  error: null,
  loading: false,
  message: null,
};

export const RoomsReducerState: IRoomReducer = {
  rooms: [],
};

export const HostelReducerState: IHostelReducer = {
  hostels: [],
};
export const StudentsReducerState: IStudentsReducer = {
  students: [],
};

export const StudentReducerState: IStudentReducer = {
  student: null,
};

export const BookingsReducerState: IBookingsReducerState = {
  bookings: [],
};

export const KeyLogsReducerState: IKeyLogsReducerState = {
  keylogs: [],
};
