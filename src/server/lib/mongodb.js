// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from "mongodb";

let client;
let clientPromise;
if (!process.env.MONGO_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}
if (process.env.NODE_ENV === "production") {
  const uri = process.env.MONGO_URI;
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  const uri = process.env.MONGO_URI;
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}
export default clientPromise;
