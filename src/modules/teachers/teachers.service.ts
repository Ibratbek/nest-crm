import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Teacher } from "src/Entities/Teachers";
import { DeleteResult, Repository } from "typeorm";
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

  updateTeacher(body: UpdateTeacherDTO): Observable<Teacher> {
    const teacher = this.teachersRepository.create({
      id: body.id,
      first_name: body.firstName,
      last_name: body.lastName,
    });

    return from(this.teachersRepository.save(teacher));
  }

  deleteTeacher(id: number): Observable<DeleteResult> {
    return from(this.teachersRepository.delete(id));
  }
}
