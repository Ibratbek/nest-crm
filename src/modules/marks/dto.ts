import { StudentDTO } from "../students/dto";
import { SubjectDTO } from "../subjects/dto";

export class MarkDTO {
  id: number;
  student: StudentDTO;
  subject: SubjectDTO;
  date: Date;
  mark: number;
}

export class CreateMarkDTO {
  studentId: number;
  subjectId: number;
  mark: number;
}

export class UpdateMarkDTO {
  studentId: number;
  subjectId: number;
  mark: number;
}
