import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateGroupDTO, GroupDTO, UpdateGroupDTO } from './dto';
import { GroupsService } from './groups.service';

@Controller('groups')
@ApiTags('Groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Created' })
  @ApiBadRequestResponse({
    description: 'Bad Request',
    schema: {
      type: 'String',
      enum: ['Name must be a string', 'This group already exists'],
    },
  })
  async createGroup(@Body() name: CreateGroupDTO): Promise<GroupDTO> {
    const group = await this.groupsService.getGroupByName(name);

    if (group) {
      throw new BadRequestException('This group already exists');
    }

    return await this.groupsService.createGroup(name);
  }

  @Get()
  @ApiOkResponse({ description: 'OK' })
  async getGroups(): Promise<GroupDTO[]> {
    return await this.groupsService.getGroups();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'OK' })
  @ApiNotFoundResponse({ description: 'This group not found!' })
  async getGroupById(@Param('id') id: number): Promise<GroupDTO> {
    const group = await this.groupsService.getGroupById(id);

    if (group === undefined) {
      throw new NotFoundException('This group not found!');
    }

    return group;
  }

  // function sendMessageToUsers(){}

  @Put(':id')
  @ApiOkResponse({ description: 'OK' })
  @ApiNotFoundResponse({ description: 'This group not found!' })
  @ApiBadRequestResponse({
    description: 'Bad Request',
    schema: {
      type: 'String',
      enum: ['Name must be a string'],
    },
  })
  async updateGroup(
    @Param('id') id: number,
    @Body() name: UpdateGroupDTO
  ): Promise<UpdateResult> {
    const group = await this.groupsService.getGroupById(id);

    if (group === undefined) {
      throw new NotFoundException('This group not found!');
    }

    return this.groupsService.updateGroup(id, name);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'OK' })
  @ApiNotFoundResponse({ description: 'This group not found!' })
  async deleteGroup(@Param('id') id: number): Promise<DeleteResult> {
    const group = await this.groupsService.getGroupById(id);

    if (group === undefined) {
      throw new NotFoundException('This group not found!');
    }

    return this.groupsService.deleteGroup(id);
  }
}
