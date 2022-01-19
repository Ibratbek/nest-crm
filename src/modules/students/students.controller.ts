import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Observable } from "rxjs";
import { Student } from "src/Entities/Students";
import { DeleteResult, UpdateResult } from "typeorm";
import { CreateStudentDTO, StudentDTO, UpdateStudentDTO } from "./dto";
import { StudentsService } from "./students.service";

@Controller("students")
@ApiTags("Students")
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}

  @Post()
  @ApiOkResponse({ description: "succesfully added" })
  createStudent(@Body() body: CreateStudentDTO): Observable<StudentDTO> {
    return this.studentService.insertStudent(body);
  }

  @Get()
  @ApiOkResponse({ description: "succesfully get" })
  getStudents(): Observable<Student[]> {
    return this.studentService.getStudents();
  }

  @Get("/:id")
  getStudent(@Param("id") id: number): Observable<Student> {
    return this.studentService.getStudent(id);
  }

  @Put("/:id")
  updateStudent(
    @Body() body: UpdateStudentDTO,
    @Param() id: number
  ): Observable<UpdateResult> {
    return this.studentService.updateStudent(body, id);
  }
  @Delete("/:id")
  deleteStudent(@Param() id: number): Observable<DeleteResult> {
    return this.studentService.deleteStudent(id);
  }
}
