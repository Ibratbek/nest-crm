import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Student } from "src/Entities/Students";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateStudentDTO, StudentDTO, UpdateStudentDTO } from "./dto";

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>
  ) {}

  async insertStudent(body: CreateStudentDTO): Promise<Student> {
    const student = this.studentRepository.create({
      first_name: body.firstName,
      last_name: body.lastName,
      group: { id: body.groupId },
    });
    return await this.studentRepository.save(student);
  }

  getStudents(): Observable<Student[]> {
    return from(
      this.studentRepository
        .createQueryBuilder("student")
        .leftJoinAndSelect("student.group", "group")
        .getMany()
    );
  }

  getStudent(id: number): Observable<Student> {
    return from(
      this.studentRepository
        .createQueryBuilder("student")
        .leftJoinAndSelect("student.group", "group")
        .where("student.id = :id", { id: id })
        .getOne()
    );
  }

  updateStudent(body: UpdateStudentDTO, id: number): Observable<UpdateResult> {
    const student = {
      first_name: body.firstName,
      last_name: body.lastName,
      group: { id: body.groupId },
    };

    return from(this.studentRepository.update(id, student));
  }

  deleteStudent(id: number): Observable<DeleteResult> {
    return from(this.studentRepository.delete(id));
  }
}
