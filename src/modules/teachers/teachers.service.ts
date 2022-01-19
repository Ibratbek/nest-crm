import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Teacher } from "src/Entities/Teachers";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateTeacherDTO, UpdateTeacherDTO } from "./dto";

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teachersRepository: Repository<Teacher>
  ) {}

  createTeacher(body: CreateTeacherDTO): Observable<Teacher> {
    const teacher = this.teachersRepository.create({
      first_name: body.firstName,
      last_name: body.lastName,
    });

    return from(this.teachersRepository.save(teacher));
  }

  getTeachers(): Observable<Teacher[]> {
    return from(this.teachersRepository.find());
  }

  getTeacher(id: number): Observable<Teacher> {
    return from(this.teachersRepository.findOne(id));
  }

  updateTeacher(body: UpdateTeacherDTO, id: number): Observable<UpdateResult> {
    return from(this.teachersRepository.update(id, body));
  }

  deleteTeacher(id: number): Observable<DeleteResult> {
    return from(this.teachersRepository.delete(id));
  }
}
