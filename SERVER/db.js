import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);
const dbName = "webshopDB";

export async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    return client.db(dbName);
  } catch (err) {
    console.error(err);
  }
}