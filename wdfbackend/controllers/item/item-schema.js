import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
    {
        itemId: { type: Number, required: true, unique: true },
        title: String,
        price: String,
        colors: [String],
        sizes: [String],
        image: String,
    },
    { collection: "Items" }
);
export default itemSchema;