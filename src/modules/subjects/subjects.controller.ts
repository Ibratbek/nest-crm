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
import { CreateSubjectDTO, SubjectDTO, UpdateSubjectDTO } from "./dto";
import { SubjectsService } from "./subjects.service";

@Controller("subjects")
@ApiTags("Subjects")

export class SubjectsController {
  constructor(private readonly subjectService: SubjectsService) {}

  @Post()
  createSubject(@Body() body: CreateSubjectDTO): Observable<SubjectDTO> {
    return this.subjectService.createSubject(body);
  }

  @Get()
  getSubjects(): Observable<SubjectDTO[]> {
    return this.subjectService.getAll();
  }

  @Get("/:id")
  getSubjectById(@Param() id: number): Observable<SubjectDTO> {
    return this.subjectService.getSubjectById(id);
  }

  @Put("/:id")
  updateSubject(
    @Param() id: number,
    @Body() body: UpdateSubjectDTO
  ): Observable<UpdateResult> {
    return this.subjectService.updateSubject(id, body);
  }

  @Delete("/:id")
  deleteSubject(@Param() id: number): Observable<DeleteResult> {
    return this.subjectService.deleteSubject(id);
  }
}
