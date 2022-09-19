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
  bookings: () => `bookings/get`,
  keylogs_get: (yr?: string) =>
    `hostel/logs/get/?year=${yr ? yr : academicYear}`,
  searchStudent: (id: string) => `student/get/?id=${id}`,
  private_hostels_get: "private/hostels/get",
  get_complains_by_status: (status?: number) =>
    `complains/get/status?status=${status ? status : 0}`,
};

export enum PostRoutes {
  school_hostel_add = "hostel/add",
  private_hostel_add = "private/hostel/add",
  private_hostel_update = "private/hostel/update",
  private_hostel_delete = "private/hostel/delete",
  student_login = "student/login",
  hostel_book = "hostel/book",
  student_register = "booking/student/register",
  get_available_rooms = "rooms/get/available",
  approve_booking = "booking/approve",
  decline_booking = "booking/decline",
  keylog_add = "hostel/log/add",
  student_info_update = "student/info/update",
  student_delete = "student/delete",
  hostel_info_update = "hostel/update",
  update_hostel_visibility = "hostel/visibility/update",
  complain_add = "complain/add",
  complains_resolve = "complains/resolve",
}
