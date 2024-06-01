import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import Constants from 'src/shared/constants/constants';

export class SignInDto {
  @ApiProperty({
    example: Constants.API_PROPERTY_SIGN_IN_USERNAME_EXAMPLE,
    description: Constants.API_PROPERTY_SIGN_IN_USERNAME_DESCRIPTION,
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({
    example: Constants.API_PROPERTY_SIGN_IN_PASSWORD_EXAMPLE,
    description: Constants.API_PROPERTY_SIGN_IN_PASSWORD_DESCRIPTION,
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
