import { Module } from '@nestjs/common';
import { MarksController } from './marks.controller';
import { MarksService } from './marks.service';

@Module({
  controllers: [MarksController],
  providers: [MarksService]
})
export class MarksModule {}
