import knex from "knex";
import _ from "lodash";

const db = knex({
  client: "pg",
  connection: `${process.env.POSTGRES_URL}?ssl=true`,
});

export type Table = "products" | "users";

export const useDb = <T extends {}>(table: Table) => {
  return db<T>(_.startCase(table).split(" ").join(""));
};
