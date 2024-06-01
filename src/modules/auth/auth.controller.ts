import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/auth.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../user/dtos/create-user.dto';
import { CreateUserType, SignInType } from '../user/interfaces/user.interface';
import Constants from 'src/shared/constants/constants';
import { UserEntity } from '../user/user.entity';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({ summary: Constants.API_OPERATION_CREATE_USER_INFO })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: Constants.API_RESPONSE_OK_CREATE_USER_DESCRIPTION,
    type: UserEntity,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: Constants.API_RESPONSE_BAD_REQUEST,
  })
  @ApiBody({ type: CreateUserDto })
  create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    const newUser: CreateUserType = { ...createUserDto };

    return this.authService.signUp(newUser);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({ summary: Constants.API_OPERATION_SIGN_IN_INFO })
  @ApiResponse({
    status: HttpStatus.OK,
    description: Constants.API_RESPONSE_OK_SIGN_IN_DESCRIPTION,
    schema: {
      example: {
        token: Constants.API_RESPONSE_OK_SIGN_IN_TOKEN_EXAMPLE,
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: Constants.API_RESPONSE_INVALID_SIGN_IN_DESCRIPTION,
  })
  signIn(@Body() signInDto: SignInDto) {
    const credentials: SignInType = { ...signInDto };

    return this.authService.signIn(credentials);
  }
}
