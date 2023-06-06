import { config } from "dotenv";
config();

export const {
  NODE_ENV,
  DB_USERNAME,
  DB_PASSWORD,
  DB_CLUSTER,
  ACCESS_JWT_SECRET,
  REFRESH_JWT_SECRET,
  CLIENT_URL,
  SERVER_URL,
  PORT,
  SMTP_USER,
  SMTP_PASSWORD,
} = process.env;
