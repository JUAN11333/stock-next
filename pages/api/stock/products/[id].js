import ProductPage from "@/pages/products/[id]";
import { connect, model, models, Schema } from "mongoose";
// const connectionString =
//   "mongodb+srv://may:SXYJ79KCcNwUbPaa@cluster0.qltslov.mongodb.net/stock";

export default async function handler(req, res) {
  await connect(process.env.MONGODB_URI);
  console.log("req.method: ", req.method);
  console.log("req.query.id", req.query.id);

  const id = req.query.id;
  if (req.method === "GET") {
    // Get only one document
    const doc = await Product.findOne({ _id: id });
    res.status(200).json(doc);
  } else if (req.method === "DELETE") {
    const deletedDoc = await Product.deleteOne({ _id: id });
    res.status(200).json(deletedDoc);
  } else if (req.method === "PUT") {
    console.log("id", req.query.id);
    console.log(req.body);
    const updatedDoc = await Product.updateOne({ _id: id }, req.body);
    res.status(200).json(req);
  } else {
    res.setHeader("Allow", ["GET", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const productSchema = new Schema({
  code: String,
  name: String,
  price: Number,
});

console.log("Mongoose Models", models);
const Product = models?.product || model("product", productSchema);
