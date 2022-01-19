import { GroupDTO } from "../groups/dto";

export class StudentDTO {
  id: number;
  first_name: string;
  last_name: string;
  group: GroupDTO;
}
