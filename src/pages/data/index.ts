import { IHomeNavRoute, ITableHeader } from "../interface";

export const HomeNavLinks: IHomeNavRoute[] = [
  { title: "Login", route: "" },
  { title: "Hostels", route: "hostels" },
  { title: "Shop", route: "shop" },
  { title: "About Us", route: "about" },
];

export const StudentsTableHeader: ITableHeader[] = [
  { title: "Name", align: "left" },
  { title: "Reference Number", align: "center" },
  { title: "Room Number", align: "center" },
  { title: "Gender", align: "center" },
  { title: "Hostel", align: "center" },
  { title: "Action", align: "center" },
];

export const RoomsTableHeader: ITableHeader[] = [
  { title: "Hostel", align: "left" },
  { title: "Room Number", align: "center" },
  { title: "Gender", align: "center" },
  { title: "Capacity", align: "center" },
  { title: "Room Size", align: "center" },
  { title: "Room Status", align: "center" },
  { title: "More", align: "center" },
];
