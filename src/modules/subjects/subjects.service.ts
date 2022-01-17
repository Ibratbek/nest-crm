import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Subject } from "src/Entities/Subjects";
import { Repository } from "typeorm";
import { SubjectDTO } from "./dto";
@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>
  ) {}

  createSubject(title: string): Observable<Subject> {
    return from(this.subjectRepository.save({ title }));
  }

  findAll(): Observable<SubjectDTO[]> {
    return from(this.subjectRepository.find());
  }
}
