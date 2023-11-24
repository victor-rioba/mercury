import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

export default {
  client: "pg",
  connection: `${process.env.POSTGRES_URL}?ssl=true`,
};
