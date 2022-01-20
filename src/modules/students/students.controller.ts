import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
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
  @ApiOkResponse({ description: "Created" })
  @ApiBadRequestResponse({
    description: "Bad Request",
    schema: {
      type: "String",
      enum: ["Name must be a string"],
    },
  })
  async createStudent(@Body() body: CreateStudentDTO): Promise<StudentDTO> {
    return await this.studentService.insertStudent(body);
  }

  @Get()
  @ApiOkResponse({ description: "OK" })
  getStudents(): Observable<Student[]> {
    return this.studentService.getStudents();
  }

  @Get("/:id")
  @ApiOkResponse({ description: "OK" })
  getStudent(@Param("id") id: number): Observable<Student> {
    return this.studentService.getStudent(id);
  }

  @Put("/:id")
  @ApiOkResponse({ description: "OK" })
  updateStudent(
    @Body() body: UpdateStudentDTO,
    @Param() id: number
  ): Observable<UpdateResult> {
    return this.studentService.updateStudent(body, id);
  }

  @Delete("/:id")
  @ApiOkResponse({ description: "OK" })
  deleteStudent(@Param() id: number): Observable<DeleteResult> {
    return this.studentService.deleteStudent(id);
  }
}
