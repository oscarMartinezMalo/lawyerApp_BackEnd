import { User } from "./user.model";

export interface Role {
    id: string;
    name: string;
    users: User[];
  }