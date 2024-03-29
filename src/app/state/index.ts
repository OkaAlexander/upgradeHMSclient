import {
  IBookingsReducerState,
  IHostelReducer,
  IKeyLogsReducerState,
  IPrivateHostelsState,
  IRoomReducer,
  IStudentReducer,
  IStudentsReducer,
  IUserReducerState,
  IUsersReducer,
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

export const PrivateHostelsReducerStaste: IPrivateHostelsState = {
  privateHostels: [],
};

export const UserReducerState: IUserReducerState = {
  user: null,
  hostel: "",
};

export const UsersReducerState: IUsersReducer = {
  users: [],
};
