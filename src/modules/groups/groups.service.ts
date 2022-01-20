import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Group } from "src/Entities/Groups";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateGroupDTO, GroupDTO, UpdateGroupDTO } from "./dto";

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private readonly groupsRepository: Repository<Group>
  ) {}

  async createGroup(name: CreateGroupDTO): Promise<GroupDTO> {
    return await this.groupsRepository.save(name);
  }

  async getGroups(): Promise<GroupDTO[]> {
    return await this.groupsRepository.find();
  }

  async getGroupById(id: number): Promise<GroupDTO> {
    return await this.groupsRepository.findOne(id);
  }

  async updateGroup(id: number, group: UpdateGroupDTO): Promise<UpdateResult> {
    return await this.groupsRepository.update(id, group);
  }

  async deleteGroup(id: number): Promise<DeleteResult> {
    return await this.groupsRepository.delete(id);
  }

  async getGroupByName(name: CreateGroupDTO): Promise<GroupDTO> {
    return await this.groupsRepository.findOne(name);
  }
}
