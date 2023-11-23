import knex from "knex";
import _ from "lodash";

const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.POSTGRES_URL,
    host: process.env["POSTGRES_HOST"],
    port: 5432,
    user: process.env["POSTGRES_USER"],
    database: process.env["POSTGRES_DATABASE"],
    password: process.env["POSTGRES_PASSWORD"],
    ssl: { rejectUnauthorized: false },
  },
});

export type Table = "products" | "users";

export const useDb = <T extends {}>(table: Table) => {
  return db<T>(_.startCase(table).split(" ").join(""));
};
