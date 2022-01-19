import { Module } from "@nestjs/common";
import { SubjectsService } from "./subjects.service";
import { SubjectsController } from "./subjects.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Subject } from "src/Entities/Subjects";

@Module({
  imports: [TypeOrmModule.forFeature([Subject])],
  providers: [SubjectsService],
  controllers: [SubjectsController],
})
export class SubjectsModule {}
