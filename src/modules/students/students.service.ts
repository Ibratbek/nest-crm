import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Student } from "src/Entities/Students";
import { DeleteResult, Repository, UpdateResult } from "typeorm";

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>
  ) {}

  getStudents(): Observable<Student[]> {
    return from(this.studentRepository.find());
  }

  getStudent(id: number): Observable<Student> {
    return from(this.studentRepository.findOne(id));
  }

  insertStudent(body: Student): Observable<Student> {
    return from(this.studentRepository.save(body));
  }

  updateStudent(body: Student, id: number): Observable<UpdateResult> {
    return from(this.studentRepository.update(id, body));
  }

  deleteStudent(id: number): Observable<DeleteResult> {
    return from(this.studentRepository.delete(id));
  }
}
