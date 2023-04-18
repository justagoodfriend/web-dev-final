import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema(
    {
        buyerId: { type: Number, required: true },
        itemId: { type: Number, required: true },
        content: String,
        rating: { type: Number, default: 0},
    },
    { collection: "Reviews" }
);
export default reviewsSchema;