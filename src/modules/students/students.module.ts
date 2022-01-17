import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';

@Module({
  controllers: [StudentsController]
})
export class StudentsModule {}
