import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  users?: UserListRelationFilter;
};
