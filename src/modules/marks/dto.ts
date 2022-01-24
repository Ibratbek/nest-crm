import { StudentDTO } from "../students/dto";
import { SubjectDTO } from "../subjects/dto";
import { IsNumber, Max, Min } from "class-validator";

export class MarkDTO {
  id: number;
  student: StudentDTO;
  subject: SubjectDTO;
  date: Date;
  mark: number;
}

export class CreateMarkDTO {
  @IsNumber()
  studentId: number;

  @IsNumber()
  subjectId: number;

  @IsNumber()
  @Min(1)
  @Max(5)
  mark: number;
}

export class UpdateMarkDTO {
  @IsNumber()
  studentId?: number;

  @IsNumber()
  subjectId?: number;

  @IsNumber()
  @Min(1)
  @Max(5)
  mark?: number;
}
