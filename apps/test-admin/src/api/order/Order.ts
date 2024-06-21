import { Product } from "../product/Product";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  products?: Array<Product>;
  updatedAt: Date;
  users?: Array<User>;
};
