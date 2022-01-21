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
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { DeleteResult, UpdateResult } from "typeorm";
import { CreateSubjectDTO, SubjectDTO, UpdateSubjectDTO } from "./dto";
import { SubjectsService } from "./subjects.service";

@Controller("subjects")
@ApiTags("Subjects")
export class SubjectsController {
  constructor(private readonly subjectService: SubjectsService) {}

  @Post()
  @ApiOkResponse({ description: "OK" })
  async createSubject(@Body() body: CreateSubjectDTO): Promise<SubjectDTO> {
    return await this.subjectService.createSubject(body);
  }

  @Get()
  @ApiOkResponse({ description: "OK" })
  async getSubjects(): Promise<SubjectDTO[]> {
    return await this.subjectService.getAll();
  }

  @Get("/:id")
  @ApiOkResponse({ description: "OK" })
  @ApiNotFoundResponse({ description: "This subject not found!" })
  async getSubjectById(@Param("id") id: number): Promise<SubjectDTO> {
    const subject = await this.subjectService.getSubjectById(id);
    if (!subject) {
      throw new NotFoundException("This subject not found!");
    }

    return subject;
  }

  @Put("/:id")
  @ApiOkResponse({ description: "OK" })
  @ApiNotFoundResponse({ description: "This subject not found!" })
  async updateSubject(
    @Param("id") id: number,
    @Body() body: UpdateSubjectDTO
  ): Promise<UpdateResult> {
    const subject = await this.subjectService.getSubjectById(id);
    if (!subject) {
      throw new NotFoundException("This subject not found!");
    }

    return await this.subjectService.updateSubject(id, body);
  }

  @Delete("/:id")
  @ApiOkResponse({ description: "OK" })
  @ApiNotFoundResponse({ description: "This subject not found!" })
  async deleteSubject(@Param("id") id: number): Promise<DeleteResult> {
    const subject = await this.subjectService.getSubjectById(id);
    if (!subject) {
      throw new NotFoundException("This subject not found!");
    }

    return await this.subjectService.deleteSubject(id);
  }
}
