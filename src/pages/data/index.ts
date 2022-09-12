import { ITableHeader } from "../interface";

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

export const BookingsTableHeader: ITableHeader[] = [
  { title: "ReferenceNumber", align: "left" },
  { title: "IndexNumber", align: "left" },
  { title: "StudentName", align: "left" },
  { title: "PhoneNumber", align: "center" },
  { title: "Hostel", align: "left" },
  { title: "DateBooked", align: "center" },
  { title: "More", align: "center" },
];

export const HostelsTableHeader: ITableHeader[] = [
  { title: "Hostel ID", align: "left" },
  { title: "Hostel Name", align: "left" },
  { title: "Capacity", align: "center" },
  { title: "Slots Available", align: "center" },
  { title: "Total Approved", align: "center" },
  { title: "Total Booked", align: "center" },
  { title: "Price", align: "center" },
  { title: "Edit", align: "center" },
];
