import { Injectable, BadRequestException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserType } from './interfaces/user.interface';
import { UserEntity } from './user.entity';
import { ErrorMessages } from 'src/shared/enums/error-messages.enum';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(newUser: CreateUserType): Promise<UserEntity> {
    const { username, password, role } = newUser;

    const existingUser = await this.userRepository.findOne({
      where: { username },
    });

    if (existingUser) {
      throw new BadRequestException(ErrorMessages.USERNAME_ALREADY_EXISTS);
    }

    const userEntity = this.userRepository.create({
      username,
      password,
      role,
    });

    return this.userRepository.save(userEntity);
  }

  async findOne(username: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }
}
