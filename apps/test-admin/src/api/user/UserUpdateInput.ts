import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { ProductUpdateManyWithoutUsersInput } from "./ProductUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string;
  products?: ProductUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
