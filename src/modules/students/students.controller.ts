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
  async createStudent(@Body() body: CreateStudentDTO): Promise<StudentDTO> {
    const student = await this.studentService.insertStudent(body);
    return await student;
  }

  @Get()
  @ApiOkResponse({ description: "OK" })
  async getStudents(): Promise<Student[]> {
    return await this.studentService.getStudents();
  }

  @Get("/:id")
  async getStudent(@Param("id") id: number): Promise<Student> {
    return await this.studentService.getStudent(id);
  }

  @Put("/:id")
  async updateStudent(
    @Body() body: UpdateStudentDTO,
    @Param("id") id: number
  ): Promise<UpdateResult> {
    return await this.studentService.updateStudent(body, id);
  }
  @Delete("/:id")
  async deleteStudent(@Param("id") id: number): Promise<DeleteResult> {
    return await this.studentService.deleteStudent(id);
  }
}
