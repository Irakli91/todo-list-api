import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Role } from 'src/modules/user/enums/user.enum';
import { ErrorMessages } from 'src/shared/enums/error-messages.enum';

@Injectable()
export class CreateTaskGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // Check if the user has the role "user" to create tasks.
    if (request.user.role === Role.Admin) {
      throw new ForbiddenException(
        ErrorMessages.ONLY_USERS_WITH_ROLE_USER_CAN_CREATE_TASKS,
      );
    }
    return true;
  }
}
