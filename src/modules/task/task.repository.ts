import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { RequestUserType } from '../user/interfaces/user.interface';
import { Role } from '../user/enums/user.enum';
import { TaskEntity } from './task.entity';

@Injectable()
export class TaskRepository extends Repository<TaskEntity> {
  constructor(private dataSource: DataSource) {
    super(TaskEntity, dataSource.createEntityManager());
  }

  async getAllByUser(user: RequestUserType): Promise<TaskEntity[]> {
    const query = this.createQueryBuilder('task');

    if (user.role !== Role.Admin) {
      query.where('task.userId = :userId', { userId: user.id });
    }

    return query.getMany();
  }
}
