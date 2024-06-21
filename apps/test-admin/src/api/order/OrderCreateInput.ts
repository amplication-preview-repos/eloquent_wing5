import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  user?: UserWhereUniqueInput | null;
};
