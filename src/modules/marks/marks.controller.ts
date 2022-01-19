import { Body, Controller, Post } from "@nestjs/common";
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
}
