import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserType, SignInType } from '../user/interfaces/user.interface';
import { UserEntity } from '../user/user.entity';
import { ErrorMessages } from 'src/shared/enums/error-messages.enum';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(newUser: CreateUserType): Promise<UserEntity> {
    return this.userService.create(newUser);
  }

  async signIn(credentials: SignInType): Promise<{ token: string }> {
    const user = await this.userService.findOne(credentials.username);

    if (!user) {
      throw new UnauthorizedException(ErrorMessages.INVALID_CREDENTIALS);
    }

    const isPasswordValid = await bcrypt.compare(
      credentials.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException(ErrorMessages.INVALID_CREDENTIALS);
    }

    const token = this.jwtService.sign({ id: user.id, role: user.role });

    return { token };
  }
}
