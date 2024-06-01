import { Module } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { TaskEntity } from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity, TaskRepository])],
  providers: [TaskService, TaskRepository, JwtService],
  controllers: [TaskController],
})
export class TaskModule {}
