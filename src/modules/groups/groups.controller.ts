import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { UpdateResult } from "typeorm";
import { ICreateGroup, IGroup, IUpdateGroup } from "./dto";
import { GroupsService } from "./groups.service";

@Controller("groups")
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  createGroup(@Body() name: ICreateGroup): Observable<IGroup> {
    return this.groupsService.createGroup(name);
  }

  @Get()
  getGroups(): Observable<IGroup[]> {
    return this.groupsService.getGroups();
  }

  @Get(":id")
  getGroupById(@Param() id: number): Observable<IGroup> {
    return this.groupsService.getGroupById(id);
  }

  @Put(":id")
  updateGroup(
    @Param() id: number,
    @Body() name: IUpdateGroup
  ): Observable<UpdateResult> {
    return this.groupsService.updateGroup(id, name);
  }

  @Delete(":id")
  deleteGroup(@Param() id: number) {
    return this.groupsService.deleteGroup(id);
  }
}
