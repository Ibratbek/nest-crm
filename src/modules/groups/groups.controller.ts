import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ApiCreatedResponse, ApiOkResponse } from "@nestjs/swagger";
import { Observable } from "rxjs";
import { UpdateResult } from "typeorm";
import { CreateGroupDTO, GroupDTO, UpdateGroupDTO } from "./dto";
import { GroupsService } from "./groups.service";

@Controller("groups")
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  @ApiCreatedResponse({ description: "Create group" })
  createGroup(@Body() name: CreateGroupDTO): Observable<GroupDTO> {
    return this.groupsService.createGroup(name);
  }

  @Get()
  @ApiOkResponse({ description: "All groups of crm" })
  getGroups(): Observable<GroupDTO[]> {
    return this.groupsService.getGroups();
  }

  @Get(":id")
  @ApiOkResponse({ description: "One group" })
  getGroupById(@Param() id: number): Observable<GroupDTO> {
    return this.groupsService.getGroupById(id);
  }

  @Put(":id")
  @ApiOkResponse({ description: "Successfully updated!" })
  updateGroup(
    @Param() id: number,
    @Body() name: UpdateGroupDTO
  ): Observable<UpdateResult> {
    return this.groupsService.updateGroup(id, name);
  }

  @Delete(":id")
  @ApiOkResponse({ description: "Successfully deleted!" })
  deleteGroup(@Param() id: number) {
    return this.groupsService.deleteGroup(id);
  }
}
