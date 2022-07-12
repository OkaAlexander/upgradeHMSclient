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
    icon: Money,
  },
  {
    name: "Book Room",
    url: Routes.BOOK,
    icon: PersonAdd,
  },
  {
    name: "Check-Ins",
    url: Routes.CHECKINS,
    icon: AccountTree,
  },
  {
    name: "Student",
    url: Routes.STUDENT,
    icon: AccountBox,
  },
  {
    name: "Hostels",
    url: Routes.HOSTELS,
    icon: HomeWork,
  },
  {
    name: "Students",
    url: Routes.STUDENTS,
    icon: Group,
  },
  {
    name: "Complains",
    url: Routes.COMPLAINS,
    icon: ReportProblem,
  },
  {
    name: "Key Logs",
    url: Routes.KEY_LOGS,
    icon: Key,
  },
  { name: "Rooms", url: Routes.ROOMS, icon: Room },
  { name: "Profile", url: Routes.PROFILE, icon: Settings },
  { name: "Users", url: Routes.USERS, icon: AccountCircleOutlined },
  // { name: "Add Hostel", url: Routes.ADMIN_REGISTER_HOSTEL, icon: HomeTwoTone },
  { name: "Cards", url: Routes.STUDENT_CARDS, icon: CardMembership },
];
export const userRoutes: navigationInterface[] = [
  {
    name: "Check-Ins",
    url: Routes.CHECKINS,
    icon: Home,
  },
  {
    name: "Student",
    url: Routes.STUDENT,
    icon: AccountBox,
  },
  {
    name: "Students",
    url: Routes.STUDENTS,
    icon: AccountBalanceSharp,
  },
  {
    name: "Complains",
    url: Routes.COMPLAINS,
    icon: ReportProblem,
  },
  {
    name: "KeyLogs",
    url: Routes.KEY_LOGS,
    icon: Key,
  },
  { name: "Cards", url: Routes.STUDENT_CARDS, icon: CardMembership },
];
