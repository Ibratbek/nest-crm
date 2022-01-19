import { GroupDTO } from "../groups/dto";

export class StudentDTO {
  id: number;
  first_name: string;
  last_name: string;
  group: GroupDTO;
}

export class CreateStudentDTO {
  firstName: string;
  lastName: string;
  groupId: number;
}
export class UpdateStudentDTO {
  firstName: string;
  lastName: string;
  groupId: number;
}
