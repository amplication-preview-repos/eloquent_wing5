import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { UserUpdateManyWithoutOrdersInput } from "./UserUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  products?: ProductUpdateManyWithoutOrdersInput;
  users?: UserUpdateManyWithoutOrdersInput;
};
