import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from './enums/user.enum';
import Constants from 'src/shared/constants/constants';
import { TaskEntity } from '../task/task.entity';

@Entity()
export class UserEntity {
  @ApiProperty({
    example: Constants.API_PROPERTY_USER_UUID_EXAMPLE,
    description: Constants.API_PROPERTY_USER_ENTITY_ID_DESCRIPTION,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: Constants.API_PROPERTY_USER_ENTITY_USERNAME_EXAMPLE,
    description: Constants.API_PROPERTY_USER_ENTITY_USERNAME_DESCRIPTION,
  })
  @Column({ type: 'varchar', length: 100 })
  username: string;

  @ApiProperty({
    example: Constants.API_PROPERTY_USER_ENTITY_PASSWORD_EXAMPLE,
    description: Constants.API_PROPERTY_USER_ENTITY_PASSWORD_DESCRIPTION,
  })
  @Exclude()
  @Column({ type: 'varchar', length: 500 })
  password: string;

  @ApiProperty({
    enum: Role,
    example: Constants.API_PROPERTY_USER_ENTITY_ROLE_EXAMPLE,
    description: Constants.API_PROPERTY_USER_ENTITY_ROLE_DESCRIPTION,
  })
  @Column({ type: 'enum', enum: Role })
  @Exclude()
  role: string;

  @ApiProperty({
    example: Constants.API_PROPERTY_USER_ENTITY_CREATED_AT_EXAMPLE,
    description: Constants.API_PROPERTY_USER_ENTITY_CREATED_AT_DESCRIPTION,
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    example: Constants.API_PROPERTY_USER_ENTITY_UPDATED_AT_EXAMPLE,
    description: Constants.API_PROPERTY_USER_ENTITY_UPDATED_AT_DESCRIPTION,
  })
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => TaskEntity, (task) => task.user)
  tasks: TaskEntity[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
