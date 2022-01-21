import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Subject } from "src/Entities/Subjects";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateSubjectDTO, SubjectDTO, UpdateSubjectDTO } from "./dto";

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>
  ) {}

  async createSubject(body: CreateSubjectDTO): Promise<SubjectDTO> {
    return await this.subjectRepository.save(body);
  }

  async getAll(): Promise<SubjectDTO[]> {
    return await this.subjectRepository.find();
  }

  async getSubjectById(id: number): Promise<SubjectDTO> {
    return await this.subjectRepository.findOne(id);
  }

  async updateSubject(
    id: number,
    body: UpdateSubjectDTO
  ): Promise<UpdateResult> {
    return await this.subjectRepository.update(id, body);
  }

  async deleteSubject(id: number): Promise<DeleteResult> {
    return this.subjectRepository.delete(id);
  }
}
