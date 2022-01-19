import { Controller, Get } from "@nestjs/common";
import { StudentsService } from "./students.service";

@Controller("students")
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}
  @Get()
  getStudents() {
    return this.studentService.getStudents();
  }

  @Get("/:id")
  getStudent(id: number) {
    return this.studentService.getStudent(id);
  }
}
