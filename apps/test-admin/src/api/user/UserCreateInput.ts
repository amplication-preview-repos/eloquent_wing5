import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { ProductCreateNestedManyWithoutUsersInput } from "./ProductCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  products?: ProductCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
