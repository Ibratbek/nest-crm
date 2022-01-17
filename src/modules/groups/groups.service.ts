import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Group } from "src/Entities/Groups";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import {
  CreateGroupDTO,
  DeleteGroupDTO,
  GroupDTO,
  UpdateGroupDTO,
} from "./dto";

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private readonly groupsRepository: Repository<Group>
  ) {}

  createGroup(name: CreateGroupDTO): Observable<GroupDTO> {
    return from(this.groupsRepository.save(name));
  }

  getGroups(): Observable<GroupDTO[]> {
    return from(this.groupsRepository.find());
  }

  getGroupById(id: number): Observable<GroupDTO> {
    return from(this.groupsRepository.findOne(id));
  }

  updateGroup(id: number, group: UpdateGroupDTO): Observable<UpdateResult> {
    return from(this.groupsRepository.update(id, group));
  }

  deleteGroup(id: DeleteGroupDTO): Observable<DeleteResult> {
    return from(this.groupsRepository.delete(id));
  }
}
