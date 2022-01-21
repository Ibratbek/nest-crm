import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { DeleteResult, UpdateResult } from "typeorm";
import {
  CreateSubjectTeacherDTO,
  SubjectTeacherDTO,
  UpdateSubjectTeacherDTO,
} from "./dto";
import { SubjectTeacherService } from "./subject-teacher.service";

@Controller("subject-teacher")
@ApiTags("SubjectTeacher")
export class SubjectTeacherController {
  constructor(private readonly subjectTeacherService: SubjectTeacherService) {}

  @Post()
  async createSubjectTeacher(
    @Body() body: CreateSubjectTeacherDTO
  ): Promise<SubjectTeacherDTO> {
    return await this.subjectTeacherService.insertSubjectTeacher(body);
  }

  @Get()
  async getSubjectTeachers(): Promise<SubjectTeacherDTO[]> {
    return await this.subjectTeacherService.getSubjectTeachers();
  }

  @Get("/:id")
  async getSubjectTeacher(@Param("id") id: number): Promise<SubjectTeacherDTO> {
    return await this.subjectTeacherService.getSubjectTeacher(id);
  }

  @Put("/:id")
  async updateSubjectTeacher(
    @Param("id") id: number,
    @Body() body: UpdateSubjectTeacherDTO
  ): Promise<UpdateResult> {
    return await this.subjectTeacherService.updateSubjectTeacher(id, body);
  }

  @Delete("/:id")
  async deleteSubjectTeacher(@Param("id") id: number): Promise<DeleteResult> {
    return await this.subjectTeacherService.deleteSubjectTeacher(id);
  }
}
