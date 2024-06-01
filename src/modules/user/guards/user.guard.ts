import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { TaskService } from '../../task/task.service';
import { RequestUserType } from '../interfaces/user.interface';
import { Role } from '../enums/user.enum';
import { isUUID } from 'class-validator';
import { ErrorMessages } from 'src/shared/enums/error-messages.enum';

@Injectable()
export class UserAccessGuard implements CanActivate {
  constructor(private taskService: TaskService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user: RequestUserType = request.user;

    // If user is admin, allow access
    if (user.role === Role.Admin) {
      return true;
    }

    // If user is not admin, allow access only to their own tasks
    const taskId = context.getArgs()[0].params.id; // Extract task ID from route parameters

    // Validate UUID
    if (!isUUID(taskId, '4')) {
      throw new BadRequestException(ErrorMessages.INVALID_UUID);
    }

    const task = await this.taskService.getById(taskId);

    if (!task || task.userId !== user.id) {
      throw new ForbiddenException(
        ErrorMessages.YOU_DONT_HAVE_PERMISSION_TO_ACCESS_THIS_RESOURCE,
      );
    }

    return true;
  }
}
