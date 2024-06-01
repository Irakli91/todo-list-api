import { Module } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [TaskService, TaskRepository, JwtService],
  controllers: [TaskController],
})
export class TaskModule {}
