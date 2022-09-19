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
export const PrivateHostelsTableHeader: ITableHeader[] = [
  { title: "Hostel ID", align: "left" },
  { title: "Hostel Name", align: "left" },
  { title: "Hostel Price", align: "center" },
  { title: "Address", align: "center" },
  { title: "Contact", align: "center" },
  { title: "Edit", align: "center" },
];

export const ComplainsType: string[] = ["ELECTRICAL", "CAPENTRY", "PLUMBING"];

export const ElectricalProblems: string[] = [
  "FAULTY ROOM SOCKET ",
  "FAULTY BALCONY SOCKET ",
  "FAULTY BALCONY LIGHT.",
  "FAULTY WASHROOMS LIGHT.",
  "FAULTY SWITCH.",
  "SPOILT ROOM BULB",
  "SPOILT BALCONY BULB",
  "SPOILT WASHROOMS BULB",
  "ALL SOCKETS AND LIGHTING OFF",
  "ALL SOCKETS NOT WORKING.",
  "LOOSE ROOMS SOCKET ",
  "LOOSE ROOMS SWITCH ",
  "LOOSE BALCONY SOCKET ",
  "LOOSE BALCONY SWITCH ",
  "LOOSE BATHROOM SWITCH ",
];

export const CarpentryProblems: string[] = [
  "BROKEN DOOR",
  "BROKEN DOOR HANDLE",
  "BROKEN BED SLAPS",
  "SPOILT MATTRESS",
  "BROKEN KEYS",
  "SPOILT DOOR LOCK",
  "SPOIL DOOR LOCK CYLINDER",
  "BROKEN LOUVRE BLADES",
  "ROOF LEAKAGE",
  "SPOILT CEILING",
  "SPOILT NET",
  "BROKEN STUDY TABLE",
  "BROKEN WARDROBE",
  "BROKEN WARDDROBE HANDLE",
  "SHAKING OR LOOSED BED",
];

export const PlumbingProblems: string[] = [
  "CHOCKED SINK",
  "SINK LEAKAGE",
  "BROKEN SINK",
  "SPOILT WATER CLOSET ",
  "BROKEN WATER CLOSET HANDLE",
  "DETATCHED TUBES",
  "CHOCKED BATHROOM",
  "SPOILT SHOWER",
  "WATER NOT FLOWING",
];

type faultType = {
  title: string;
  faults: string[];
};
export const Problems: faultType[] = [
  { title: "ELECTRICAL", faults: ElectricalProblems },
  { title: "CARPENTRY", faults: CarpentryProblems },
  { title: "PLUMBING", faults: PlumbingProblems },
];
