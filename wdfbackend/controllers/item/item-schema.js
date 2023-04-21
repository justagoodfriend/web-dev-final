import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
    {
        itemId: { type: Number, required: true },
        title: String,
        price: String,
        description: String,
        availableColors: [String],
        image: String,
    },
    { collection: "Items" }
);
export default itemSchema;