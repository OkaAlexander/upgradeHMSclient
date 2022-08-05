import PersonModel from "./PersonModel";

export default interface StudentModel extends PersonModel {
  roomNumber: string;
}
