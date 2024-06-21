import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  products?: ProductCreateNestedManyWithoutOrdersInput;
};
