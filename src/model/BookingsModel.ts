import PersonModel from "./PersonModel";

export default interface BookingsModel extends PersonModel {
  dateBooked: string;
}
export default interface TrashModel extends PersonModel {}
