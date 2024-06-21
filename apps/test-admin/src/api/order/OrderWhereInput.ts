import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  products?: ProductListRelationFilter;
};
