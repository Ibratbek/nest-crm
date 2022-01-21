import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Student } from "src/Entities/Students";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateStudentDTO, UpdateStudentDTO } from "./dto";

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>
  ) {}

  async getStudents(): Promise<Student[]> {
    return await this.studentRepository
      .createQueryBuilder("student")
      .leftJoinAndSelect("student.group", "group")
      .getMany();
  }

  async getStudent(id: number): Promise<Student> {
    return await this.studentRepository
      .createQueryBuilder("student")
      .leftJoinAndSelect("student.group", "group")
      .where("student.id = :id", { id: id })
      .getOne();
  }

  async insertStudent(body: CreateStudentDTO): Promise<Student> {
    const student = this.studentRepository.create({
      first_name: body.firstName,
      last_name: body.lastName,
      group: { id: body.groupId },
    });
    return await this.studentRepository.save(student);
  }

  async updateStudent(
    body: UpdateStudentDTO,
    id: number
  ): Promise<UpdateResult> {
    const student = {
      first_name: body.firstName,
      last_name: body.lastName,
      group: { id: body.groupId },
    };

    return await this.studentRepository.update(id, student);
  }

  async deleteStudent(id: number): Promise<DeleteResult> {
    return await this.studentRepository.delete(id);
  }
}
