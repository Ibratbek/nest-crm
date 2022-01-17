import { ApiProperty } from "@nestjs/swagger";

export class GroupDTO {
  @ApiProperty({ type: Number })
  id: number;
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
