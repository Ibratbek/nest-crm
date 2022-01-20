import { Module } from "@nestjs/common";
import { SubjectTeacherService } from "./subject-teacher.service";
import { SubjectTeacherController } from "./subject-teacher.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SubjectTeacher } from "src/Entities/SubjectTeacher";

@Module({
  imports: [TypeOrmModule.forFeature([SubjectTeacher])],
  providers: [SubjectTeacherService],
  controllers: [SubjectTeacherController],
})
export class SubjectTeacherModule {}
