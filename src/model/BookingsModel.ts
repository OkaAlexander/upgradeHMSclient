import PersonModel from "./PersonModel";

export default interface BookingsModel extends PersonModel {
  dateBooked: string;
}
