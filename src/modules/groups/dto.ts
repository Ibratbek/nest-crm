import { ApiProperty } from "@nestjs/swagger";

export class GroupDTO {
  @ApiProperty({ type: Number })
  id: number;
  @ApiProperty({ type: String })
  name: string;
}

export class CreateGroupDTO {
  @ApiProperty({ type: String })
  name: string;
}

export class UpdateGroupDTO {
  @ApiProperty({ type: String })
  name: string;
}

export class DeleteGroupDTO {
  @ApiProperty({ type: Number })
  id: number;
}
