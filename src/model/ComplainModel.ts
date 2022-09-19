import moment from "moment";

export default interface ComplainModel {
  hostelId: string;
  compliantName: string;
  roomNumber: string;
  problemType: string;
  problem: string;
  dateOfComplain: string;
  status: number;
  id: string;
  description: string;
  academicYear: string;
}

export const ComplainModelInfo: ComplainModel = {
  hostelId: "",
  compliantName: "",
  roomNumber: "",
  problem: "",
  problemType: "",
  status: 0,
  academicYear: "",
  id: "",
  description: "",
  dateOfComplain: moment().format(),
};
