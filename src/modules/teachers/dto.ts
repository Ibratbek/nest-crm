import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class TeacherDTO {
  @IsNumber()
  @ApiProperty({ type: Number })
  id: number;
  @IsString()
  @ApiProperty({ type: String })
  first_name: string;
  @IsString()
  @ApiProperty({ type: String })
  last_name: string;
}

export class CreateTeacherDTO {
  @IsString()
  @ApiProperty({ type: String })
  firstName: string;
  @IsString()
  @ApiProperty({ type: String })
  lastName: string;
}

export class UpdateTeacherDTO {
  @IsNumber()
  @ApiProperty({ type: Number })
  id: number;
  @IsString()
  @ApiProperty({ type: String })
  firstName: string;
  @IsString()
  @ApiProperty({ type: String })
  lastName: string;
}

export class GetTeacherParamDTO {
  @IsNumber()
  @ApiProperty({ type: Number })
  id: number;
}
