export default interface KeylogModel {
  hostelId: string;
  dateOfLog: string;
  roomNumber: string;
  referenceNumber: string;
  studentName: string;
  action: number;
  username: string;
  academicYear: string;
  id: string;
}

export const KeyLogInfo: KeylogModel = {
  hostelId: "",
  dateOfLog: "",
  roomNumber: "",
  studentName: "",
  username: "",
  action: 0,
  referenceNumber: "",
  academicYear: "",
  id: "",
};
