import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Observable } from "rxjs";
import { DeleteResult, getRepository, UpdateResult } from "typeorm";
import { CreateMarkDTO, MarkDTO, UpdateMarkDTO } from "./dto";
import { MarksService } from "./marks.service";
import { Student } from "src/Entities/Students";
import { Subject } from "src/Entities/Subjects";

@Controller("marks")
@ApiTags("Marks")
export class MarksController {
  constructor(private readonly marksService: MarksService) {}

  @Post()
  async createMark(@Body() body: CreateMarkDTO): Promise<MarkDTO> {
    const studentRepository = getRepository(Student);

    const student = await studentRepository.findOne(body.studentId);

    if (student === undefined) {
      throw new NotFoundException("This student not found!");
    }

    const subjectRepository = getRepository(Subject);

    const subject = await subjectRepository.findOne(body.subjectId);

    if (subject === undefined) {
      throw new NotFoundException("This subject not found!");
    }

    return this.marksService.createMark(body);
  }

  @Get()
  async getAllMarks(): Promise<MarkDTO[]> {
    return this.marksService.getAll();
  }

  @Get(":id")
  async getMarkById(@Param("id") id: number): Promise<MarkDTO> {
    return this.marksService.getOne(id);
  }

  @Put(":id")
  async updateMark(
    @Param() id: number,
    @Body() body: UpdateMarkDTO
  ): Promise<UpdateResult> {
    return this.marksService.update(id, body);
  }

  @Delete(":id")
  async deleteMark(@Param() id: number): Promise<DeleteResult> {
    return this.marksService.delete(id);
  }
}
