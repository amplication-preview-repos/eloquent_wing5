import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { UserUpdateManyWithoutProductsInput } from "./UserUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  order?: OrderWhereUniqueInput | null;
  users?: UserUpdateManyWithoutProductsInput;
};
