import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Mark } from "src/Entities/Marks";
import { MarksController } from "./marks.controller";
import { MarksService } from "./marks.service";

@Module({
  imports: [TypeOrmModule.forFeature([Mark])],
  controllers: [MarksController],
  providers: [MarksService],
})
export class MarksModule {}
