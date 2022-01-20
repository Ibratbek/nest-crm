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
import { Observable } from "rxjs";
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
  createSubjectTeacher(
    @Body() body: CreateSubjectTeacherDTO
  ): Observable<SubjectTeacherDTO> {
    return this.subjectTeacherService.insertSubjectTeacher(body);
  }

  @Get()
  getSubjectTeachers(): Observable<SubjectTeacherDTO[]> {
    return this.subjectTeacherService.getSubjectTeachers();
  }

  @Get("/:id")
  getSubjectTeacher(@Param("id") id: number): Observable<SubjectTeacherDTO> {
    return this.subjectTeacherService.getSubjectTeacher(id);
  }

  @Put("/:id")
  updateSubjectTeacher(
    @Param("id") id: number,
    @Body() body: UpdateSubjectTeacherDTO
  ): Observable<UpdateResult> {
    return this.subjectTeacherService.updateSubjectTeacher(id, body);
  }

  @Delete("/:id")
  deleteSubjectTeacher(@Param("id") id: number): Observable<DeleteResult> {
    return this.subjectTeacherService.deleteSubjectTeacher(id);
  }
}
