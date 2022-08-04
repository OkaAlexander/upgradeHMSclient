import RoomModel from "../../model/RoomModel";

export function SortRoom(a: any, b: any): number {
  return a.roomNumber - b.roomNumber ? 1 : 0;
}
