import BookingsModel from "../../model/BookingsModel";
import HostelModel from "../../model/HostelModel";
import KeylogModel from "../../model/KeylogModel";
import PrivateHostelModel from "../../model/PrivateHostelModel";
import RoomModel from "../../model/RoomModel";
import StudentModel from "../../model/StudentModel";
import UserModel from "../../model/UserModel";

export interface IRoomReducer {
  rooms: RoomModel[];
}

export interface IHostelReducer {
  hostels: HostelModel[];
}

export interface IStudentsReducer {
  students: StudentModel[];
}

export interface IKeyLogsReducerState {
  keylogs: KeylogModel[];
}

export interface IStudentReducer {
  student: StudentModel | null;
}

export interface IBookingsReducerState {
  bookings: BookingsModel[];
}

export interface IPrivateHostelsState {
  privateHostels: PrivateHostelModel[];
}

export interface IUserReducerState {
  user: UserModel | null;
  hostel: string;
}

export interface IUsersReducer {
  users: UserModel[];
}
