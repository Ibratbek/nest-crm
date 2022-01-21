import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";
import { GroupDTO } from "../groups/dto";
import { TeacherDTO } from "../teachers/dto";

export class CreateSubjectTeacherDTO {
  @IsNumber()
  @ApiProperty({ type: Number })
  teacherId: number;
  @IsNumber()
  @ApiProperty({ type: Number })
  groupId: number;
}

export class SubjectTeacherDTO {
  id: number;
  teacher: TeacherDTO;
  group: GroupDTO;
}

export class UpdateSubjectTeacherDTO {
  @IsNumber()
  @ApiProperty({ type: Number })
  teacherId: number;
  @IsNumber()
  @ApiProperty({ type: Number })
  groupId: number;
}
