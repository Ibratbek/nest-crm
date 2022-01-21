import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { StudentsModule } from "./modules/students/students.module";
import { GroupsModule } from "./modules/groups/groups.module";
import { TeachersModule } from "./modules/teachers/teachers.module";
import { SubjectTeacherModule } from "./modules/subject-teacher/subject-teacher.module";
import { MarksModule } from "./modules/marks/marks.module";
import { SubjectsModule } from "./modules/subjects/subjects.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      name: "default",
      type: "postgres",
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: false,
      logging: false,
    }),
    StudentsModule,
    GroupsModule,
    SubjectsModule,
    TeachersModule,
    SubjectTeacherModule,
    MarksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
