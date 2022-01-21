import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class SubjectDTO {
  @IsNumber()
  @ApiProperty({ type: Number })
  id: number;
  @IsString()
  @ApiProperty({ type: String })
  title: string;
}

export class CreateSubjectDTO {
  @IsString()
  @ApiProperty({ type: String })
  title: string;
}

export class UpdateSubjectDTO {
  @IsString()
  @ApiProperty({ type: String })
  title: string;
}
