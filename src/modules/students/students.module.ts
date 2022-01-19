import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Student } from "src/Entities/Students";
import { StudentsController } from "./students.controller";
import { StudentsService } from "./students.service";

@Module({
  controllers: [StudentsController],
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentsService],
})
export class StudentsModule {}
