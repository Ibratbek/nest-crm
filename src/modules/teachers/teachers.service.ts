import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Teacher } from "src/Entities/Teachers";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateTeacherDTO, UpdateTeacherDTO } from "./dto";

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teachersRepository: Repository<Teacher>
  ) {}

  async createTeacher(body: CreateTeacherDTO): Promise<Teacher> {
    const teacher = this.teachersRepository.create({
      first_name: body.firstName,
      last_name: body.lastName,
    });

    return await this.teachersRepository.save(teacher);
  }

  async getTeachers(): Promise<Teacher[]> {
    return await this.teachersRepository.find();
  }

  async getTeacher(id: number): Promise<Teacher> {
    return await this.teachersRepository.findOne(id);
  }

  async updateTeacher(
    body: UpdateTeacherDTO,
    id: number
  ): Promise<UpdateResult> {
    const teacher = this.teachersRepository.create({
      first_name: body.firstName,
      last_name: body.lastName,
    });
    return await this.teachersRepository.update(id, teacher);
  }

  async deleteTeacher(id: number): Promise<DeleteResult> {
    return await this.teachersRepository.delete(id);
  }

}
