import moment from "moment";

const academicYear: string = `${(
  parseInt(moment().format("YYYY")) - 1
).toString()}/${moment().format("YYYY")}`;

export const GetRoutes = {
  students: (year?: string) =>
    `students/get/?year=${year ? year : academicYear}`,
  complains: (year?: string) =>
    `hostel/complains/get/?year=${year ? year : academicYear}`,
  rooms: (year?: string) => `rooms/get/?year=${year ? year : academicYear}`,
  hostels: "hostels/get",
};

export enum PostRoutes {
  school_hostel_add = "hostel/add",
  private_hostel_add = "private/hostel/add",
  student_login = "student/login",
  hostel_book = "hostel/book",
  student_register = "booking/student/register",
  get_available_rooms = "rooms/get/available",
}
