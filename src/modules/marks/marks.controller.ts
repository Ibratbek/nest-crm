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
import { DeleteResult, UpdateResult } from "typeorm";
import { CreateMarkDTO, MarkDTO, UpdateMarkDTO } from "./dto";
import { MarksService } from "./marks.service";

@Controller("marks")
@ApiTags("Marks")
export class MarksController {
  constructor(private readonly marksService: MarksService) {}

  @Post()
  createMark(@Body() body: CreateMarkDTO): Observable<MarkDTO> {
    return this.marksService.createMark(body);
  }

  @Get()
  getAllMarks(): Observable<MarkDTO[]> {
    return this.marksService.getAll();
  }

  @Get(":id")
  getMarkById(@Param("id") id: number): Observable<MarkDTO> {
    return this.marksService.getOne(id);
  }

  @Put(":id")
  updateMark(
    @Param() id: number,
    @Body() body: UpdateMarkDTO
  ): Observable<UpdateResult> {
    return this.marksService.update(id, body);
  }

  @Delete(":id")
  deleteMark(@Param() id: number): Observable<DeleteResult> {
    return this.marksService.delete(id);
  }
}
