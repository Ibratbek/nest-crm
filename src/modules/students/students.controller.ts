import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
<<<<<<< HEAD
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
=======
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Observable } from "rxjs";
>>>>>>> 6f7b4e2743cbd83f9fe1620dc893155f81d80cc4
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
