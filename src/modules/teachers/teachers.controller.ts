import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Teacher } from "src/Entities/Teachers";
import { DeleteResult, UpdateResult } from "typeorm";
import { CreateTeacherDTO, UpdateTeacherDTO } from "./dto";
import { TeachersService } from "./teachers.service";
import { join, extname } from "path";
import { diskStorage } from "multer";

@Controller("teachers")
@ApiTags("Teachers")
export class TeachersController {
  constructor(private readonly teacherService: TeachersService) {}
  @Get()
  @ApiOkResponse({ description: "OK" })
  async getTeachers(): Promise<Teacher[]> {
    return await this.teacherService.getTeachers();
  }

  @Get(":id")
  @ApiOkResponse({ description: "OK" })
  @ApiNotFoundResponse({ description: "This teacher not found!" })
  async getTeacher(@Param("id") id: number): Promise<Teacher> {
    const teacher = await this.teacherService.getTeacher(id);

    if (!teacher) {
      throw new NotFoundException("This teacher not found!");
    }
    return teacher;
  }

  @Post()
  @ApiCreatedResponse({ description: "Created" })
  @ApiBadRequestResponse({
    description: "Bad Request",
  })
  async createTeacher(@Body() body: CreateTeacherDTO): Promise<Teacher> {
    return await this.teacherService.createTeacher(body);
  }

  @Put("/:id")
  @ApiOkResponse({ description: "OK" })
  @ApiNotFoundResponse({ description: "This group not found!" })
  @ApiBadRequestResponse({
    description: "Bad Request",
    schema: {
      type: "String",
      enum: ["firstName must be a string", "lastName must be a string"],
    },
  })
  async UpdateTeacher(
    @Body() body: UpdateTeacherDTO,
    @Param() id: number
  ): Promise<UpdateResult> {
    const teacher = await this.teacherService.getTeacher(id);

    if (!teacher) {
      throw new NotFoundException("This teacher not found!");
    }

    return await this.teacherService.updateTeacher(body, id);
  }

  @Delete("/:id")
  @ApiOkResponse({ description: "OK" })
  @ApiNotFoundResponse({ description: "This teacher not found!" })
  @ApiBadRequestResponse({
    description: "Bad Request",
    schema: {
      type: "String",
      enum: ["firstName must be a string", "lastName must be a string"],
    },
  })
  async deleteTeacher(@Param("id") id: number): Promise<DeleteResult> {
    const teacher = await this.teacherService.getTeacher(id);

    if (!teacher) {
      throw new NotFoundException("This teacher not found!");
    }

    return await this.teacherService.deleteTeacher(id);
  }

  @Post("upload")
  @ApiOkResponse({ description: "img succesfully uploaded" })
  @ApiBadRequestResponse({
    description: "Bad Request",
  })
  @UseInterceptors(
    FileInterceptor("photo", {
      storage: diskStorage({
        destination: join(__dirname, "../../shared/uploads/avatars"),
        filename: function (_, file, cb) {
          const date: Date = new Date();
          const fileName = date.getTime();
          const ext = extname(file.originalname);
          cb(null, fileName + ext);
        },
      }), // multer diskStorage
    })
  )
  uploadImage(@UploadedFile("file") file) {
    if (!file) {
      throw new NotFoundException("File not found!");
    }
    return "File succesfully uploaded";
  }

  @Get("/uploads/:imgpath")
  @ApiOkResponse({ description: "send file" })
  getImg(@Param("imgpath") img: string, @Res() res) {
    res.sendFile(join(__dirname, "../../shared/uploads/avatars", img));
  }
}
