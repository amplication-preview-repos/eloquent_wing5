import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
