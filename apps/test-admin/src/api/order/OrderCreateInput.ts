import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { UserCreateNestedManyWithoutOrdersInput } from "./UserCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  products?: ProductCreateNestedManyWithoutOrdersInput;
  users?: UserCreateNestedManyWithoutOrdersInput;
};
