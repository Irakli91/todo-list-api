import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Patch,
  Delete,
  UseGuards,
  Request,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { TaskService } from './task.service';
import { AuthGuard } from '../auth/guards/auth.guard';
import { UserAccessGuard } from '../user/guards/user.guard';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { CreateTaskGuard } from './guards/task.guard';
import { RequestUserType } from '../user/interfaces/user.interface';
import { CreateTaskType, UpdateTaskType } from './interfaces/task.interface';
import Constants from 'src/shared/constants/constants';
import { TaskEntity } from './task.entity';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(CreateTaskGuard)
  @ApiOperation({ summary: Constants.API_OPERATION_CREATE_TASK_INFO })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: Constants.API_RESPONSE_OK_CREATE_TASK_DESCRIPTION,
    type: TaskEntity,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: Constants.API_RESPONSE_BAD_REQUEST,
  })
  @ApiBody({ type: CreateTaskDto })
  create(
    @Body() createTaskDto: CreateTaskDto,
    @Request() request,
  ): Promise<TaskEntity> {
    // Auth user id.
    const userId = request.user.id;

    const newTask: CreateTaskType = { ...createTaskDto, userId };

    return this.taskService.create(newTask);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: Constants.API_OPERATION_GET_ALL_TASKS_INFO })
  @ApiResponse({
    status: HttpStatus.OK,
    description: Constants.API_RESPONSE_OK_GET_ALL_TASKS_DESCRIPTION,
    type: [TaskEntity],
  })
  getAllByUser(@Request() request): Promise<TaskEntity[]> {
    const user: RequestUserType = request.user;

    return this.taskService.getAllByUser(user);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(UserAccessGuard)
  @ApiOperation({ summary: Constants.API_OPERATION_GET_ONE_TASK_INFO })
  @ApiResponse({
    status: HttpStatus.OK,
    description: Constants.API_RESPONSE_OK_GET_ONE_TASK_DESCRIPTION,
    type: TaskEntity,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: Constants.API_RESPONSE_NOT_FOUND_GET_ONE_TASK_DESCRIPTION,
  })
  getById(@Param('id') id: string): Promise<TaskEntity> {
    return this.taskService.getById(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(UserAccessGuard)
  @ApiOperation({ summary: Constants.API_OPERATION_UPDATED_TASK_INFO })
  @ApiResponse({
    status: HttpStatus.OK,
    description: Constants.API_RESPONSE_OK_UPDATE_TASK_DESCRIPTION,
    type: TaskEntity,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: Constants.API_RESPONSE_NOT_FOUND_UPDATE_TASK_DESCRIPTION,
  })
  @ApiBody({ type: UpdateTaskDto })
  update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<TaskEntity> {
    const updateTask: UpdateTaskType = { ...updateTaskDto, id };

    return this.taskService.update(updateTask);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(UserAccessGuard)
  @ApiOperation({ summary: Constants.API_OPERATION_DELETE_TASK_INFO })
  @ApiResponse({
    status: HttpStatus.OK,
    description: Constants.API_RESPONSE_OK_DELETE_TASK_DESCRIPTION,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: Constants.API_RESPONSE_NOT_FOUND_DELETE_TASK_DESCRIPTION,
  })
  delete(@Param('id') id: string): Promise<void> {
    return this.taskService.delete(id);
  }
}
