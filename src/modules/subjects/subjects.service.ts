import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Subject } from "src/Entities/Subjects";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateSubjectDTO, SubjectDTO, UpdateSubjectDTO } from "./dto";

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>
  ) {}

  createSubject(body: CreateSubjectDTO): Observable<SubjectDTO> {
    return from(this.subjectRepository.save(body));
  }

  getAll(): Observable<SubjectDTO[]> {
    return from(this.subjectRepository.find());
  }

  updateSubject(id: number, body: UpdateSubjectDTO): Observable<UpdateResult> {
    return from(this.subjectRepository.update(id, body));
  }

  deleteSubject(id: number): Observable<DeleteResult> {
    return from(this.subjectRepository.delete(id));
  }
}
