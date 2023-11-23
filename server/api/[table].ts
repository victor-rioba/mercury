import _ from "lodash";

import type { Table } from "../utils/db";

export default defineEventHandler(async (event) => {
  const table = getRouterParam(event, "table") as Table;
  const data = await useDb(table).select();
  return { [_.camelCase(table)]: data };
});
