import PersonModel from "./PersonModel";

export default interface StudentModel extends PersonModel {
  roomNumber: string;
}

export const InitialStudentInfo: StudentModel = {
  studentName: "",
  roomNumber: "",
  phoneNumber: "",
  programme: "",
  gender: "",
  email: "",
  hostelId: "",
  referenceNumber: "",
  indexNumber: "",
  picture: "",
  studentLevel: "",
  academicYear: "",
};
