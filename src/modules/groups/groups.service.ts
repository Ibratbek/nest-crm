import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Group } from "src/Entities/Groups";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { GroupDTO, GroupIdDTO, GroupNameDTO } from "./dto";

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private readonly groupsRepository: Repository<Group>
  ) {}

  createGroup(name: GroupNameDTO): Observable<GroupDTO> {
    return from(this.groupsRepository.save(name));
  }

  getGroups(): Observable<GroupDTO[]> {
    return from(this.groupsRepository.find());
  }

  getGroupById(id: GroupIdDTO): Observable<GroupDTO> {
    return from(this.groupsRepository.findOne(id));
  }

  updateGroup(id: GroupIdDTO, group: GroupNameDTO): Observable<UpdateResult> {
    return from(this.groupsRepository.update(id, group));
  }

  deleteGroup(id: GroupIdDTO): Observable<DeleteResult> {
    return from(this.groupsRepository.delete(id));
  }
}
