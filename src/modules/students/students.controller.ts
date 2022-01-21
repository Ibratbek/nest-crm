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
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Group } from "src/Entities/Groups";
import { Student } from "src/Entities/Students";
import { DeleteResult, getRepository, UpdateResult } from "typeorm";
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
  @ApiNotFoundResponse({ description: "This student not found!" })
  async getStudent(@Param("id") id: number): Promise<Student> {
    const student = await this.studentService.getStudent(id);

    if (student === undefined) {
      throw new NotFoundException("This student not found!");
    }

    return await this.studentService.getStudent(id);
  }

  @Put("/:id")
  @ApiOkResponse({ description: "OK" })
  @ApiNotFoundResponse({
    description: "Not Found!",
    schema: {
      type: "String",
      enum: ["This student not found!", "This group not found!"],
    },
  })
  @ApiBadRequestResponse({
    description: "Bad Request",
    schema: {
      type: "String",
      enum: [
        "FirstName must be a string",
        "LastName must be a string",
        "GroupId must be a number",
      ],
    },
  })
  async updateStudent(
    @Body() body: UpdateStudentDTO,
    @Param("id") id: number
  ): Promise<UpdateResult> {
    const groupRepository = getRepository(Group);

    const group = await groupRepository.findOne(body.groupId);

    if (group === undefined) {
      throw new NotFoundException("This group not found!");
    }

    const student = await this.studentService.getStudent(id);

    if (student === undefined) {
      throw new NotFoundException("This student not found!");
    }

    return await this.studentService.updateStudent(body, id);
  }

  @Delete("/:id")
  @ApiOkResponse({ description: "OK" })
  @ApiNotFoundResponse({ description: "This student not found!" })
  async deleteStudent(@Param("id") id: number): Promise<DeleteResult> {
    const student = await this.studentService.getStudent(id);

    if (student === undefined) {
      throw new NotFoundException("This student not found!");
    }

    return await this.studentService.deleteStudent(id);
  }
}
