import mongoose from "mongoose";
import { DB_USERNAME, DB_PASSWORD, DB_CLUSTER } from "@config";

export async function connectToDatabase() {
  const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/test`;

  mongoose.set("strictQuery", false);

  return mongoose.connect(uri).then(() => {
    console.log("Connected to database");
  });
}
