import {
  AccountBalanceSharp,
  AccountBox,
  AccountTree,
  Create,
  Home,
  HomeTwoTone,
  HomeWork,
  Money,
  PersonAdd,
  ReportProblem,
  Room,
  Settings,
  CardMembership,
  Group,
  AccountBalanceOutlined,
  AccountCircleOutlined,
  Key,
  KeyOutlined,
  LockOutlined,
} from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import FlatIcons from "../constants/icons";

export interface navigationInterface {
  name: string;
  url: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

export const Routes = {
  ADMIN: "/admin/home",
  CHECKINS: "/admin/home/checkins",
  STUDENT: "/admin/home/student/info",
  BOOK: "/admin/home/book",
  COMPLAINS: "/admin/home/complains",
  BOOKINGS: "/admin/home/bookings",
  // ADMIN_REGISTER_HOSTEL: "/admin/home/hostel/add",
  HOSTELS: "/admin/home/hostels",
  KEY_LOGS: "/admin/home/keylogs",
  STUDENTS: "/admin/home/students",
  PROFILE: "/admin/home/profile",
  ROOMS: "/admin/home/rooms",
  USERS: "/admin/home/manage/users",
  STUDENT_CARDS: "/admin/home/students/cards",
  BOOKING_INFO_PREVIEW: "/admin/home/booking/:id",
};

export const StudentsRoutes = {
  DASHBOARD: "/dashboard",
  HOMEPAGE: "/",
  CONFIRM_AND_BOOK: "/dashboard/confirm_and_book",
  STUDENT_ACCOUNT: "/dashboard/account",
  STUDENT_ROOM: "/dashboard/room",
  STUDENT_COMPLAIN: "/dashboard/complain",
};
export const AdminRoutes = [
  {
    name: "Bookings",
    url: Routes.BOOKINGS,
    icon: FlatIcons.FcReadingEbook,
  },
  {
    name: "Book Room",
    url: Routes.BOOK,
    icon: FlatIcons.FcCollaboration,
  },
  {
    name: "Check-Ins",
    url: Routes.CHECKINS,
    icon: FlatIcons.FcMultipleInputs,
  },
  {
    name: "Student",
    url: Routes.STUDENT,
    icon: FlatIcons.FcGraduationCap,
  },
  {
    name: "Hostels",
    url: Routes.HOSTELS,
    icon: FlatIcons.FcHome,
  },
  {
    name: "Students",
    url: Routes.STUDENTS,
    icon: FlatIcons.FcConferenceCall,
  },
  {
    name: "Complains",
    url: Routes.COMPLAINS,
    icon: FlatIcons.FcHighPriority,
  },
  {
    name: "Key Logs",
    url: Routes.KEY_LOGS,
    icon: FlatIcons.FcKey,
  },
  { name: "Rooms", url: Routes.ROOMS, icon: FlatIcons.FcDepartment },
  { name: "Profile", url: Routes.PROFILE, icon: FlatIcons.FcPortraitMode },
  { name: "Users", url: Routes.USERS, icon: FlatIcons.FcManager },
  // { name: "Add Hostel", url: Routes.ADMIN_REGISTER_HOSTEL, icon: HomeTwoTone },
  {
    name: "Cards",
    url: Routes.STUDENT_CARDS,
    icon: FlatIcons.FcBusinessContact,
  },
  { name: "Trash", url: Routes.BOOKINGS, icon: FlatIcons.FcFullTrash },
];
export const userRoutes: navigationInterface[] = [
  {
    name: "Check-Ins",
    url: Routes.CHECKINS,
    icon: FlatIcons.FcMultipleInputs,
  },
  {
    name: "Student",
    url: Routes.STUDENT,
    icon: FlatIcons.FcGraduationCap,
  },
  {
    name: "Students",
    url: Routes.STUDENTS,
    icon: FlatIcons.FcConferenceCall,
  },
  {
    name: "Complains",
    url: Routes.COMPLAINS,
    icon: FlatIcons.FcHighPriority,
  },
  {
    name: "KeyLogs",
    url: Routes.KEY_LOGS,
    icon: FlatIcons.FcKey,
  },
  {
    name: "Cards",
    url: Routes.STUDENT_CARDS,
    icon: FlatIcons.FcBusinessContact,
  },
];
