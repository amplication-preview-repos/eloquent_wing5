import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  products?: ProductListRelationFilter;
  users?: UserListRelationFilter;
};
