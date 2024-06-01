import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from './enums/task.enum';
import Constants from 'src/shared/constants/constants';
import { UserEntity } from '../user/user.entity';

@Entity()
export class TaskEntity {
  @ApiProperty({
    example: Constants.API_PROPERTY_TASK_UUID_EXAMPLE,
    description: Constants.API_PROPERTY_TASK_ENTITY_ID_DESCRIPTION,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: Constants.API_PROPERTY_TASK_ENTITY_TITLE_EXAMPLE,
    description: Constants.API_PROPERTY_TASK_ENTITY_TITLE_DESCRIPTION,
  })
  @Column({ type: 'varchar', length: 100 })
  title: string;

  @ApiProperty({
    example: Constants.API_PROPERTY_TASK_ENTITY_DESCRIPTION_EXAMPLE,
    description: Constants.API_PROPERTY_TASK_ENTITY_DESCRIPTION_DESCRIPTION,
    nullable: true,
  })
  @Column({ type: 'varchar', length: 500, nullable: true })
  description: string;

  @ApiProperty({
    example: Constants.API_PROPERTY_TASK_ENTITY_STATUS_EXAMPLE,
    description: Constants.API_PROPERTY_TASK_ENTITY_STATUS_DESCRIPTION,
    enum: TaskStatus,
  })
  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.Pending,
  })
  status: string;

  @ApiProperty({
    example: Constants.API_PROPERTY_TASK_ENTITY_CREATED_AT_EXAMPLE,
    description: Constants.API_PROPERTY_TASK_ENTITY_CREATED_AT_DESCRIPTION,
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    example: Constants.API_PROPERTY_TASK_ENTITY_UPDATED_AT_EXAMPLE,
    description: Constants.API_PROPERTY_TASK_ENTITY_UPDATED_AT_DESCRIPTION,
  })
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({
    example: Constants.API_PROPERTY_USER_UUID_EXAMPLE,
    description: Constants.API_PROPERTY_TASK_ENTITY_USER_ID_AT_DESCRIPTION,
  })
  @Column()
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.tasks)
  user: UserEntity;
}
