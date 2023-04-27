import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
  {
    itemId: { type: Number, required: true, unique: true },
    sellerId: String,
    title: String,
    price: String,
    colors: [String],
    sizes: [String],
    image: String,
    listing: Boolean,
  },
  { collection: "Items" }
);
export default itemSchema;
