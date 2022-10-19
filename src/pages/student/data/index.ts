import BookRoomModel from "../../../model/BookRoomModel";
import StudentModel from "../../../model/StudentModel";
import { IMenubarRoute } from "../interface";

export const DashboardMenuRoutes: IMenubarRoute[] = [
  { title: "Hostels", route: "hostels" },
  { title: "Shop" },
  { title: "Abouts" },
];

export const LandingMenuRoutes: IMenubarRoute[] = [
  { title: "Hostels", route: "hostels" },
  { title: "Shop", route: "shop" },
  { title: "About Us", route: "about" },
];

export const InitialBookingInfo: StudentModel = {
  hostelId: "",
  studentLevel: "",
  studentName: "",
  referenceNumber: "",
  indexNumber: "",
  picture: "",
  phoneNumber: "",
  gender: "",
  programme: "",
  email: "",
  academicYear: "",
  roomNumber: "",
};
export const rows = [
  createData("Change of locks without consent", "Ghs200.00"),
  createData(
    "Transfer of interent to other person without content",
    "Ghs200.00"
  ),
];
function createData(offences: string, charges: string) {
  return { offences, charges };
}
