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

export class GroupIdDTO {
  @ApiProperty({ type: Number })
  id: number;
}

export class GroupNameDTO {
  @ApiProperty({ type: String })
  name: string;
}
