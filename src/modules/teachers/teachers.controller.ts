import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Observable } from "rxjs";
import { Teacher } from "src/Entities/Teachers";
import { DeleteResult, UpdateResult } from "typeorm";
import { CreateTeacherDTO, UpdateTeacherDTO } from "./dto";
import { TeachersService } from "./teachers.service";

@Controller("teachers")
@ApiTags("Teachers")
export class TeachersController {
  constructor(private readonly teacherService: TeachersService) {}
  @Get()
  getTeachers(): Observable<Teacher[]> {
    return this.teacherService.getTeachers();
  }

  @Get(":id")
  getTeacher(@Param() id: number): Observable<Teacher> {
    return this.teacherService.getTeacher(id);
  }

  @Post()
  createTeacher(@Body() body: CreateTeacherDTO): Observable<Teacher> {
    return this.teacherService.createTeacher(body);
  }

  @Put("/:id")
  updateTeacher(
    @Body() body: UpdateTeacherDTO,
    @Param() id: number
  ): Observable<UpdateResult> {
    return this.teacherService.updateTeacher(body, id);
  }

  @Delete("/:id")
  deleteTeacher(@Param() id: number): Observable<DeleteResult> {
    return this.teacherService.deleteTeacher(id);
  }
}
