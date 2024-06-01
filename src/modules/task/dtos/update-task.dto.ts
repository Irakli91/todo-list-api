import { IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import Constants from 'src/shared/constants/constants';

export class UpdateTaskDto {
  @ApiPropertyOptional({
    example: Constants.API_PROPERTY_UPDATE_TASK_TITLE_EXAMPLE,
    description: Constants.API_PROPERTY_UPDATE_TASK_TITLE_DESCRIPTION,
  })
  @IsString()
  @MaxLength(100)
  @IsOptional()
  title?: string;

  @ApiPropertyOptional({
    example: Constants.API_PROPERTY_UPDATE_TASK_DESCRIPTION_EXAMPLE,
    description: Constants.API_PROPERTY_UPDATE_TASK_DESCRIPTION_DESCRIPTION,
  })
  @IsString()
  @MaxLength(500)
  @IsOptional()
  description?: string;
}
