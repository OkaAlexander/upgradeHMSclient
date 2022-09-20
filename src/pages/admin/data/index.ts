import moment from "moment";
import RoomModel from "../../../model/RoomModel";
import StudentModel from "../../../model/StudentModel";
import { ITableHeader } from "../../interface";
export const InitialStudentInfo: StudentModel = {
  studentName: "",
  phoneNumber: "",
  email: "",
  programme: "",
  gender: "",
  hostelId: "",
  studentLevel: "",
  academicYear: "",
  indexNumber: "",
  roomNumber: "A10",
  picture: "",
  referenceNumber: "",
};

export const InitialRoomInfo: RoomModel = {
  id: "",
  roomCapacity: 4,
  roomNumber: "",
  keyStatus: "",
  hostelId: "",
  roomGender: "none",
  roomSize: 0,
  roomStatus: "available",
};

export function GenerateAcademicYears() {
  const academicYears: string[] = [];
  const yr = parseInt(moment().format("YYYY"));

  for (let i = yr; i >= 2011; i--) {
    academicYears.push(`${i - 1}/${i}`);
  }
  return academicYears;
}

export function GenerateGender() {
  return ["Male", "Female"];
}

export function GetPrograms() {
  return [
    "BSC. WILDLIFE AND RANGE MANAGEMENT",
    "MSC. ENVIRONMENT, WATER AND SUSTAINABILITY",
    "BSC. RESOURCE ACCOUNTING",
    "BSC. COMPUTER SCIENCE",
    "MPHIL. ENVIRONMENTAL PLANNING AND DEVELOPMENT",
    "MPHIL. CLIMATE CHANGE",
    "MBA. AGRIBUSINESS MANAGEMENT",
    "BSC. RENEWABLE ENERGY ENGINEERING",
    "BSC. COMPUTER ENGINEERING",
    "MPHIL. APPLIED MATHEMATICS",
    "DIPLOMA IN AGRICULTURE",
    "BSC. MEDICAL BIODIAGNOSTIC SCIENCES",
    "PHD. CROP SCIENCE",
    "MPHIL. SOCIAL FORESTRY AND ENVIRONMENTAL GOVERNANCE",
    "DIPLOMA IN INFORMATION TECHNOLOGY",
    "DIPLOMA IN INSURANCE",
    "PHD. COMPUTER SCIENCE",
    "BSC. ECONOMICS",
    "PHD. ENVIRONMENT, WATER AND SUSTAINABILITY",
    "BSC. AGRICULTURAL ENGINEERING",
    "DIPLOMA IN GEO-INFORMATION SCIENCE",
    "BSC. BIOLOGICAL SCIENCES",
    "PHD. ENVIRONMENTAL ENGINEERING MANAGEMENT",
    "BSC. INFORMATION TECHNOLOGY",
    "BSC. NURSING",
    "PHD. SOCIAL FORESTRY AND ENVIRONMENTAL GOVERNANCE",
    "MPHIL. ENVIRONMENT, WATER AND SUSTAINABILITY",
    "DIPLOMA IN ELECTRICAL AND ELECTRONIC ENGINEERING",
    "BSC. PLANNING AND SUSTAINABILITY",
    "BSC. RESOURCE ECONOMICS",
    "MSC. CROP SCIENCE",
    "DIPLOMA IN ENTERPRISE MANAGEMENT",
    "MPHIL. CROP SCIENCE",
    "BSC. STATISTICS",
    "BSC. NATURAL RESOURCES MANAGEMENT",
    "BSC. ACTUARIAL SCIENCE",
    "MPHIL. COMPUTER SCIENCE",
    "BSC. ENVIRONMENTAL ENGINEERING",
    "MSC. CLIMATE CHANGE",
    "BSC. CHEMISTRY",
    "DIPLOMA IN FIRE AND DISASTER MANAGEMENT",
    "MSC. COMPUTER SCIENCE",
    "BSC. RESOURCE ENTERPRISE AND ENTREPRENEURSHIP",
    "BSC. FIRE AND DISASTER MANAGEMENT",
    "BSC. MECHANICAL ENGINEERING",
    "DIPLOMA IN NATURAL RESOURCES MANAGEMENT",
    "BSC. AGRIBUSINESS",
    "BSC. MATHEMATICS",
    "MSC. SUSTAINABLE ENERGY MANAGEMENT",
    "BSC. CLIMATE CHANGE AND SUSTAINABLE DEVELOPMENT",
    "BA. PROFESSIONAL FRENCH",
    "BSC. AGRICULTURE",
    "DIPLOMA IN STATISTICS",
    "DIPLOMA IN COMPUTER SCIENCE",
    "BSC. PETROLEUM ENGINEERING",
    "MSC. ENVIRONMENTAL PLANNING AND DEVELOPMENT",
    "DIPLOMA IN HOSPITALITY MANAGEMENT",
    "MPHIL. AGRIBUSINESS MANAGEMENT",
    "BSC. HOSPITALITY MANAGEMENT",
    "BSC. ELECTRICAL AND ELECTRONIC ENGINEERING",
    "BSC. CIVIL ENGINEERING",
    "PHD. SUSTAINABLE ENERGY MANAGEMENT",
    "MSC. ENVIRONMENTAL ENGINEERING MANAGEMENT",
  ];
}

export const ComplainstableHeader: ITableHeader[] = [
  { title: "Check", align: "left" },
  { title: "Hostel Name", align: "center" },
  { title: "Room Number", align: "center" },
  { title: "Complaint Name", align: "center" },
  { title: "Problem", align: "center" },
  { title: "Date Logged", align: "center" },
  { title: "Status", align: "center" },
  { title: "Action", align: "center" },
];

export const KeylogsTableHeader: ITableHeader[] = [
  { title: "Action", align: "left" },
  { title: "Room Number", align: "center" },
  { title: "Reference Number", align: "center" },
  { title: "Student Name", align: "center" },
  { title: "Date Logged", align: "center" },
  { title: "Username", align: "center" },
];

export const UsersTableHeader: ITableHeader[] = [
  { title: "Name", align: "left" },
  { title: "Phone", align: "center" },
  { title: "Email", align: "center" },
  { title: "Role", align: "center" },
  { title: "Status", align: "center" },
  { title: "Action", align: "center" },
];
