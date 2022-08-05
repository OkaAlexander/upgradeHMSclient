import BookingsModel from "../../model/BookingsModel";
import HostelModel from "../../model/HostelModel";
import RoomModel from "../../model/RoomModel";
import StudentModel from "../../model/StudentModel";

export interface IRoomReducer {
  rooms: RoomModel[];
}

export interface IHostelReducer {
  hostels: HostelModel[];
}

export interface IStudentsReducer {
  students: StudentModel[];
}

export interface IStudentReducer {
  student: StudentModel | null;
}

export interface IBookingsReducerState {
  bookings: BookingsModel[];
}
