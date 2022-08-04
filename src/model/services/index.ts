import StudentModel from "../StudentModel";

export function ValidateStudentInfo(info: StudentModel) {
  if (info.studentName == null || info.studentName.length <= 0) {
    throw "Student Name Required";
  }
  if (info.referenceNumber == null || info.referenceNumber.length <= 0) {
    throw "Student Reference Number Required";
  }
  if (info.programme == null || info.programme.length <= 0) {
    throw "Please Select Programme";
  }
  if (info.gender == null || info.gender.length <= 0) {
    throw "Please Select Gender";
  }
  if (info.studentLevel == null || info.studentLevel.length <= 0) {
    throw "Please Select Student Level";
  }
  if (info.email == null || info.email.length <= 0) {
    throw "Enter Email Address";
  }
  if (info.hostelId == null || info.hostelId.length <= 0) {
    throw "Please Select Hostel";
  }
  if (info.roomNumber == null || info.roomNumber.length <= 0) {
    throw "Please Select Room Number";
  }
}
