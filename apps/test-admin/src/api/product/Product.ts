import { Order } from "../order/Order";
import { User } from "../user/User";

export type Product = {
  createdAt: Date;
  id: string;
  order?: Order | null;
  updatedAt: Date;
  users?: Array<User>;
};
