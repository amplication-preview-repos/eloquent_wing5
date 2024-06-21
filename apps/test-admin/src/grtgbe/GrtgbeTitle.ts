import { Grtgbe as TGrtgbe } from "../api/grtgbe/Grtgbe";

export const GRTGBE_TITLE_FIELD = "id";

export const GrtgbeTitle = (record: TGrtgbe): string => {
  return record.id?.toString() || String(record.id);
};
