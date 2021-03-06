import {
  IHostelReducer,
  IRoomReducer,
  IStudentReducer,
  IStudentsReducer,
} from "../interface/IReducer";
import ResponseModel from "../model/ResponseModel";
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
