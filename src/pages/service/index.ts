import BookingsModel from "../../model/BookingsModel";
import { InitialBookingInfo } from "../student/data";

export function SortRoom(a: any, b: any): number {
  return a.roomNumber - b.roomNumber ? 1 : 0;
}

export function GetBookingInfo(
  data: BookingsModel[],
  referenceNumber: string
): BookingsModel {
  const info = data.find((d) => d.referenceNumber === referenceNumber);
  if (info) {
    return info;
  } else {
    return { ...InitialBookingInfo, dateBooked: "" };
  }
}
