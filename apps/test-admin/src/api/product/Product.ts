import { User } from "../user/User";

export type Product = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
