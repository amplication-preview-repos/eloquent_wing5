import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { UserCreateNestedManyWithoutProductsInput } from "./UserCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  order?: OrderWhereUniqueInput | null;
  users?: UserCreateNestedManyWithoutProductsInput;
};
