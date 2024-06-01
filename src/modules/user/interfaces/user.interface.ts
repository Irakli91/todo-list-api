import { Role } from '../enums/user.enum';

export interface RequestUserType {
  id: string;
  role: string;
}

export interface CreateUserType {
  username: string;
  password: string;
  role: Role;
}

export interface SignInType {
  username: string;
  password: string;
}
