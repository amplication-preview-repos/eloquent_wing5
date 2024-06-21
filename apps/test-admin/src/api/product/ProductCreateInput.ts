import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductCreateInput = {
  user?: UserWhereUniqueInput | null;
};
