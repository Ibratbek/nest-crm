import { Body, Controller, Post } from "@nestjs/common";
import { Observable } from "rxjs";
import { CreateSubjectDTO, SubjectDTO } from "./dto";
import { SubjectsService } from "./subjects.service";

@Controller("subjects")
export class SubjectsController {
  constructor(private readonly subjectService: SubjectsService) {}

  @Post()
  createSubject(@Body() body: CreateSubjectDTO): Observable<SubjectDTO> {
    return this.subjectService.createSubject(body);
  }
}
