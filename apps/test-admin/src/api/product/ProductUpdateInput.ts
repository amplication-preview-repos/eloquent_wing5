import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductUpdateInput = {
  user?: UserWhereUniqueInput | null;
};
