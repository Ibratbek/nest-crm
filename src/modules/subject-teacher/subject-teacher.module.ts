import { Module } from "@nestjs/common";
import { SubjectTeacherService } from "./subject-teacher.service";
import { SubjectTeacherController } from "./subject-teacher.controller";

@Module({
  providers: [SubjectTeacherService],
  controllers: [SubjectTeacherController],
})
export class SubjectTeacherModule {}
