import { User } from "@shared/user";

export interface LoginRes {
  jwt: string;
  user: User;
}
