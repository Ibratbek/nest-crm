import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Subject } from "src/Entities/Subjects";
import { SubjectResolver } from "./subjects.resolver";
import { SubjectsService } from "./subjects.service";

@Module({
  imports: [TypeOrmModule.forFeature([Subject])],
  providers: [SubjectsService, SubjectResolver],
})
export class SubjectsModule {}
