import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SubjectTeacher } from "src/Entities/SubjectTeacher";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateSubjectTeacherDTO, UpdateSubjectTeacherDTO } from "./dto";

@Injectable()
export class SubjectTeacherService {
  constructor(
    @InjectRepository(SubjectTeacher)
    private readonly subjectTeacherRepository: Repository<SubjectTeacher>
  ) {}

  async insertSubjectTeacher(
    body: CreateSubjectTeacherDTO
  ): Promise<SubjectTeacher> {
    const subject_teacher = this.subjectTeacherRepository.create({
      teacher: { id: body.teacherId },
      group: { id: body.groupId },
    });
    return this.subjectTeacherRepository.save(subject_teacher);
  }

  async getSubjectTeachers(): Promise<SubjectTeacher[]> {
    return await this.subjectTeacherRepository
      .createQueryBuilder("subject_teacher")
      .leftJoinAndSelect("subject_teacher.group", "group")
      .leftJoinAndSelect("subject_teacher.teacher", "teacher")
      .getMany();
  }

  async getSubjectTeacher(id: number): Promise<SubjectTeacher> {
    return this.subjectTeacherRepository
      .createQueryBuilder("subject_teacher")
      .leftJoinAndSelect("subject_teacher.group", "group")
      .leftJoinAndSelect("subject_teacher.teacher", "teacher")
      .where("subject_teacher.id = :id", { id })
      .getOne();
  }

  async updateSubjectTeacher(
    id: number,
    body: UpdateSubjectTeacherDTO
  ): Promise<UpdateResult> {
    const subject_teacher = {
      teacher: { id: body.teacherId },
      group: { id: body.groupId },
    };
    return await this.subjectTeacherRepository.update(id, subject_teacher);
  }

  async deleteSubjectTeacher(id: number): Promise<DeleteResult> {
    return await this.subjectTeacherRepository.delete(id);
  }
}
