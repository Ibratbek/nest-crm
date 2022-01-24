import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Mark } from "src/Entities/Marks";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateMarkDTO, MarkDTO, UpdateMarkDTO } from "./dto";

@Injectable()
export class MarksService {
  constructor(
    @InjectRepository(Mark)
    private readonly marksRepository: Repository<Mark>
  ) {}

  async createMark(body: CreateMarkDTO): Promise<MarkDTO> {
    const mark = this.marksRepository.create({
      mark: body.mark,
      student: { id: body.studentId },
      subject: { id: body.subjectId },
    });
    return await this.marksRepository.save(mark);
  }

  async getAll(): Promise<MarkDTO[]> {
    return await this.marksRepository
      .createQueryBuilder("mark")
      .leftJoinAndSelect("mark.student", "student")
      .leftJoinAndSelect("mark.subject", "subject")
      .getMany();
  }

  async getOne(id: number): Promise<MarkDTO> {
    return await this.marksRepository
      .createQueryBuilder("mark")
      .leftJoinAndSelect("mark.student", "student")
      .leftJoinAndSelect("mark.subject", "subject")
      .where("mark.id = :id", { id: id })
      .getOne();
  }

  async update(id: number, body: UpdateMarkDTO): Promise<UpdateResult> {
    return await this.marksRepository.update(id, body);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.marksRepository.delete(id);
  }
}
