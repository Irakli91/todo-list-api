import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { RequestUserType } from '../user/interfaces/user.interface';
import { CreateTaskType, UpdateTaskType } from './interfaces/task.interface';
import { TaskEntity } from './task.entity';
import { ErrorMessages } from 'src/shared/enums/error-messages.enum';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(newTask: CreateTaskType): Promise<TaskEntity> {
    const taskEntity = this.taskRepository.create(newTask);

    return this.taskRepository.save(taskEntity);
  }

  async getAllByUser(user: RequestUserType): Promise<TaskEntity[]> {
    return this.taskRepository.getAllByUser(user);
  }

  async getById(id: string): Promise<TaskEntity> {
    const task = await this.taskRepository.findOne({ where: { id } });

    if (!task) {
      throw new NotFoundException(ErrorMessages.TASK_NOT_FOUND);
    }

    return task;
  }

  async update(updateTask: UpdateTaskType): Promise<TaskEntity> {
    const { id, ...updateData } = updateTask;

    const task = await this.getById(id);

    return this.taskRepository.save({ ...task, ...updateData });
  }

  async delete(id: string): Promise<void> {
    const task = await this.getById(id);

    await this.taskRepository.remove(task);
  }
}
