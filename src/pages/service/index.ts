import BookingsModel from "../../model/BookingsModel";
import HostelModel, { InitialHostelInfo } from "../../model/HostelModel";
import { InitialBookingInfo } from "../student/data";
import Fuse from "fuse.js";
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

export function GetHostelInfoById(data: HostelModel[], id: string = "") {
  const info = data.find((h) => h.hostelId === id);
  if (info) {
    return info;
  } else {
    return InitialHostelInfo;
  }
}

export function SearchBookingInfo(
  data: BookingsModel[],
  query: string = ""
): BookingsModel[] {
  const options = {
    includeScore: true,
    keys: ["referenceNumber", "indexNumber"],
  };

  const fuse = new Fuse(data, options);
  const results = fuse.search(query);
  return results.map((res) => res.item);
}
