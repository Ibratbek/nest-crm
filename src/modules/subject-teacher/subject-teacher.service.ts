import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { SubjectTeacher } from "src/Entities/SubjectTeacher";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateSubjectTeacherDTO, UpdateSubjectTeacherDTO } from "./dto";

@Injectable()
export class SubjectTeacherService {
  constructor(
    @InjectRepository(SubjectTeacher)
    private readonly subjectTeacherRepository: Repository<SubjectTeacher>
  ) {}

  insertSubjectTeacher(
    body: CreateSubjectTeacherDTO
  ): Observable<SubjectTeacher> {
    const subject_teacher = this.subjectTeacherRepository.create({
      teacher: { id: body.teacherId },
      group: { id: body.groupId },
    });
    return from(this.subjectTeacherRepository.save(subject_teacher));
  }

  getSubjectTeachers(): Observable<SubjectTeacher[]> {
    return from(
      this.subjectTeacherRepository
        .createQueryBuilder("subject_teacher")
        .leftJoinAndSelect("subject_teacher.group", "group")
        .leftJoinAndSelect("subject_teacher.teacher", "teacher")
        .getMany()
    );
  }

  getSubjectTeacher(id: number): Observable<SubjectTeacher> {
    return from(
      this.subjectTeacherRepository
        .createQueryBuilder("subject_teacher")
        .leftJoinAndSelect("subject_teacher.group", "group")
        .leftJoinAndSelect("subject_teacher.teacher", "teacher")
        .where("subject_teacher.id = :id", { id })
        .getOne()
    );
  }

  updateSubjectTeacher(
    id: number,
    body: UpdateSubjectTeacherDTO
  ): Observable<UpdateResult> {
    const subject_teacher = {
      teacher: { id: body.teacherId },
      group: { id: body.groupId },
    };
    return from(this.subjectTeacherRepository.update(id, subject_teacher));
  }

  deleteSubjectTeacher(id: number): Observable<DeleteResult> {
    return from(this.subjectTeacherRepository.delete(id));
  }
}
