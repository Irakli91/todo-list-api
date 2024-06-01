import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Constants from 'src/shared/constants/constants';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: Constants.JWT_TOKEN_EXPIRES_TIME },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [UserService, AuthService, UserRepository],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
