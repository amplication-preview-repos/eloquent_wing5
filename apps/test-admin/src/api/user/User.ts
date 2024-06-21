import { Order } from "../order/Order";
import { Product } from "../product/Product";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  products?: Array<Product>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
