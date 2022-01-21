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
import { Teacher } from "src/Entities/Teachers";
import { DeleteResult, getRepository, UpdateResult } from "typeorm";
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
  @ApiOkResponse({ description: "OK" })
  @ApiNotFoundResponse({ description: "Group and Teacher not found!" })
  @ApiBadRequestResponse({
    description: "Bad Request",
  })
  async createSubjectTeacher(
    @Body() body: CreateSubjectTeacherDTO
  ): Promise<SubjectTeacherDTO> {
    const groupRepository = getRepository(Group);
    const teacherRepository = getRepository(Teacher);
    const group = await groupRepository.findOne(body.groupId);
    const teacher = await teacherRepository.findOne(body.teacherId);

    if (!group || !teacher) {
      throw new NotFoundException("Group and Teacher not found!");
    }
    return await this.subjectTeacherService.insertSubjectTeacher(body);
  }

  @Get()
  @ApiOkResponse({ description: "OK" })
  async getSubjectTeachers(): Promise<SubjectTeacherDTO[]> {
    return await this.subjectTeacherService.getSubjectTeachers();
  }

  @Get("/:id")
  @ApiOkResponse({ description: "OK" })
  @ApiNotFoundResponse({ description: "This SubjectTeacher not found!" })
  async getSubjectTeacher(@Param("id") id: number): Promise<SubjectTeacherDTO> {
    const subject_teacher = await this.subjectTeacherService.getSubjectTeacher(
      id
    );

    if (!subject_teacher) {
      throw new NotFoundException("SubjectTeacher not found!");
    }
    return subject_teacher;
  }

  @Put("/:id")
  @ApiNotFoundResponse({ description: "This SubjectTeacher not found!" })
  @ApiBadRequestResponse({
    description: "Bad Request",
    schema: {
      type: "String",
      enum: ["SubjectTeacher not found!", "Group and Teacher not found!"],
    },
  })
  async updateSubjectTeacher(
    @Param("id") id: number,
    @Body() body: UpdateSubjectTeacherDTO
  ): Promise<UpdateResult> {
    const subject_teacher = await this.subjectTeacherService.getSubjectTeacher(
      id
    );

    if (!subject_teacher) {
      throw new NotFoundException("SubjectTeacher not found!");
    }
    const groupRepository = getRepository(Group);
    const teacherRepository = getRepository(Teacher);
    const group = await groupRepository.findOne(body.groupId);
    const teacher = await teacherRepository.findOne(body.teacherId);

    if ((!group || !teacher) && (body.teacherId || body.groupId)) {
      throw new NotFoundException("Group and Teacher not found!");
    }

    return await this.subjectTeacherService.updateSubjectTeacher(id, body);
  }

  @Delete("/:id")
  @ApiOkResponse({ description: "OK" })
  @ApiNotFoundResponse({ description: "This SubjectTeacher not found!" })
  async deleteSubjectTeacher(@Param("id") id: number): Promise<DeleteResult> {
    const subject_teacher = await this.subjectTeacherService.getSubjectTeacher(
      id
    );

    if (!subject_teacher) {
      throw new NotFoundException("SubjectTeacher not found!");
    }

    return await this.subjectTeacherService.deleteSubjectTeacher(id);
  }
}
