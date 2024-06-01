import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../enums/user.enum';
import Constants from 'src/shared/constants/constants';

export class CreateUserDto {
  @ApiProperty({
    example: Constants.API_PROPERTY_CREATE_USER_USERNAME_EXAMPLE,
    description: Constants.API_PROPERTY_CREATE_USER_USERNAME_DESCRIPTION,
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({
    example: Constants.API_PROPERTY_CREATE_USER_PASSWORD_EXAMPLE,
    description: Constants.API_PROPERTY_CREATE_USER_PASSWORD_DESCRIPTION,
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    example: Constants.API_PROPERTY_CREATE_USER_ROLE_EXAMPLE,
    description: Constants.API_PROPERTY_CREATE_USER_ROLE_DESCRIPTION,
  })
  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;
}
