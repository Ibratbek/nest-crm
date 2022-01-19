import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { Teacher } from "src/Entities/Teachers";
import { DeleteResult } from "typeorm";
import { CreateTeacherDTO, GetTeacherParamDTO, UpdateTeacherDTO } from "./dto";
import { TeachersService } from "./teachers.service";

@Controller("teachers")
export class TeachersController {
  constructor(private readonly teacherService: TeachersService) {}
  @Get()
  getTeachers(): Observable<Teacher[]> {
    return this.teacherService.getTeachers();
  }

  @Get(":id")
  getTeacher(@Param() param: GetTeacherParamDTO): Observable<Teacher> {
    return this.teacherService.getTeacher(param.id);
  }

  @Post()
  createTeacher(@Body() body: CreateTeacherDTO): Observable<Teacher> {
    return this.teacherService.createTeacher(body);
  }

  @Put("/:id")
  updateTeacher(
    @Body() body: UpdateTeacherDTO,
    @Param() param: GetTeacherParamDTO
  ): Observable<Teacher> {

    body.id = param.id;
    return this.teacherService.updateTeacher(body);
  }

  @Delete("/:id")
  deleteTeacher(@Param() param: GetTeacherParamDTO): Observable<DeleteResult> {
    return this.teacherService.deleteTeacher(param.id);
  }
}
