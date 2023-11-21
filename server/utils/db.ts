import knex from "knex";

const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.POSTGRES_URL,
    host: process.env["POSTGRES_HOST"],
    port: 5432,
    user: process.env["POSTGRES_USER"],
    database: process.env["POSTGRES_DATABASE"],
    password: process.env["POSTGRES_PASSWORD"],
    ssl: { rejectUnauthorized: false }
  },
});

export const useDb = <T extends {}>(table: string) => db<T>(table);
