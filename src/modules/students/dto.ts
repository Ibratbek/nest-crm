import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { GroupDTO } from "../groups/dto";

export class StudentDTO {
  @ApiProperty({ type: Number })
  id: number;

  @IsString()
  @ApiProperty({ type: String })
  first_name: string;

  @IsString()
  @ApiProperty({ type: String })
  last_name: string;

  @ApiProperty({ type: Object })
  group: GroupDTO;
}

export class CreateStudentDTO {
  @IsString()
  @ApiProperty({ type: String })
  firstName: string;

  @IsString()
  @ApiProperty({ type: String })
  lastName: string;

  @IsNumber()
  @ApiProperty({ type: Number })
  groupId: number;
}
export class UpdateStudentDTO {
  @IsString()
  @ApiProperty({ type: String })
  firstName: string;

  @IsString()
  @ApiProperty({ type: String })
  lastName: string;

  @IsNumber()
  @ApiProperty({ type: Number })
  groupId: number;
}
