import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Observable } from "rxjs";
import { CreateMarkDTO, MarkDTO } from "./dto";
import { MarksService } from "./marks.service";

@Controller("marks")
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
}
