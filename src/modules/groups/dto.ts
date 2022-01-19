import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class GroupDTO {
  @IsNumber()
  @ApiProperty({ type: Number })
  id: number;

  @IsString()
  @ApiProperty({ type: String })
  name: string;
}

export class CreateGroupDTO {
  @IsString()
  @ApiProperty({ type: String })
  name: string;
}

export class UpdateGroupDTO {
  @IsString()
  @ApiProperty({ type: String })
  name: string;
}
