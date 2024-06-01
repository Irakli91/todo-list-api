import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import Constants from 'src/shared/constants/constants';

export class CreateTaskDto {
  @ApiProperty({
    example: Constants.API_PROPERTY_CREATE_TASK_TITLE_EXAMPLE,
    description: Constants.API_PROPERTY_CREATE_TASK_TITLE_DESCRIPTION,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  title: string;

  @ApiProperty({
    example: Constants.API_PROPERTY_CREATE_TASK_DESCRIPTION_EXAMPLE,
    description: Constants.API_PROPERTY_CREATE_TASK_DESCRIPTION_DESCRIPTION,
    required: false,
  })
  @IsString()
  @MaxLength(500)
  @IsOptional()
  description: string;
}
