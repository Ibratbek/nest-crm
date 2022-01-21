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
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Teacher } from "src/Entities/Teachers";
import { DeleteResult, UpdateResult } from "typeorm";
import { CreateTeacherDTO, UpdateTeacherDTO } from "./dto";
import { TeachersService } from "./teachers.service";

@Controller("teachers")
@ApiTags("Teachers")
export class TeachersController {
  constructor(private readonly teacherService: TeachersService) {}
  @Get()
  @ApiOkResponse({ description: "OK" })
  async getTeachers(): Promise<Teacher[]> {
    return await this.teacherService.getTeachers();
  }

  @Get(":id")
  @ApiOkResponse({ description: "OK" })
  @ApiNotFoundResponse({ description: "This teacher not found!" })
  async getTeacher(@Param("id") id: number): Promise<Teacher> {
    const teacher = await this.teacherService.getTeacher(id);

    if (!teacher) {
      throw new NotFoundException("This teacher not found!");
    }
    return teacher;
  }

  @Post()
  @ApiCreatedResponse({ description: "Created" })
  @ApiBadRequestResponse({
    description: "Bad Request",
  })
  async createTeacher(@Body() body: CreateTeacherDTO): Promise<Teacher> {
    return await this.teacherService.createTeacher(body);
  }

  @Put("/:id")
  @ApiOkResponse({ description: "OK" })
  @ApiNotFoundResponse({ description: "This group not found!" })
  @ApiBadRequestResponse({
    description: "Bad Request",
    schema: {
      type: "String",
      enum: ["firstName must be a string", "lastName must be a string"],
    },
  })
  async UpdateTeacher(
    @Body() body: UpdateTeacherDTO,
    @Param() id: number
  ): Promise<UpdateResult> {
    const teacher = await this.teacherService.getTeacher(id);

    if (!teacher) {
      throw new NotFoundException("This teacher not found!");
    }

    return await this.teacherService.updateTeacher(body, id);
  }

  @Delete("/:id")
  @ApiOkResponse({ description: "OK" })
  @ApiNotFoundResponse({ description: "This teacher not found!" })
  @ApiBadRequestResponse({
    description: "Bad Request",
    schema: {
      type: "String",
      enum: ["firstName must be a string", "lastName must be a string"],
    },
  })
  async deleteTeacher(@Param("id") id: number): Promise<DeleteResult> {
    const teacher = await this.teacherService.getTeacher(id);

    if (!teacher) {
      throw new NotFoundException("This teacher not found!");
    }

    return await this.teacherService.deleteTeacher(id);
  }
}
