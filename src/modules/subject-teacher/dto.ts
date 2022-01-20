import { GroupDTO } from "../groups/dto";
import { TeacherDTO } from "../teachers/dto";

export class CreateSubjectTeacherDTO {
  teacherId: number;
  groupId: number;
}

export class SubjectTeacherDTO {
  id: number;
  teacher: TeacherDTO;
  group: GroupDTO;
}

export class UpdateSubjectTeacherDTO {
  teacherId: number;
  groupId: number;
}
