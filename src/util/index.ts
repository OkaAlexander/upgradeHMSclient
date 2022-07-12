import StudentModel from "../model/StudentModel";
import Fuse from "fuse.js";
export function getStudentsByGender(
  students: StudentModel[],
  gender?: string
): StudentModel[] {
  return students.filter(
    (std) => std.Gender.trim() === (gender ? gender : "Male")
  );
}

export function searchStudent(students: StudentModel[], srch: string) {
  if (srch.length <= 0) {
    return students;
  }
  const options = {
    keys: ["StudentName", "ReferenceNumber"],
  };

  const fuse = new Fuse(students, options);

  const results = fuse.search(srch);

  return results.map((r) => {
    return r.item;
  });
}
