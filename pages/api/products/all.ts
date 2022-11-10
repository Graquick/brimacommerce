import { connectToDatabase } from "../../../lib/connectToDatabase";

export default async function handler(request: any, response: any) {
  try {
    // @ts-ignore
    const { mongoClient } = await connectToDatabase();
    const db = mongoClient.db("shop");
    const collection = db.collection("products");
    const results = await collection.find({}).toArray();

    response.status(200).json(results);
  } catch (e) {
    console.log(e);
  }
}
