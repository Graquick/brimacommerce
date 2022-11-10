import clientPromise from "../../../lib/mongodb";

export default async function handler(request: any, response: any) {
  try {
    // @ts-ignore
    const mongoClient = await clientPromise;
    const db = mongoClient.db("shop");
    const collection = db.collection("products");
    const results = await collection.find({}).limit(5).toArray();

    response.status(200).json(results);
  } catch (e) {
    console.log(e);
  }
}
