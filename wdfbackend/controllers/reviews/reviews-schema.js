import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema({
    itemId: { type: String, required: true },
    content: String,
    rating: { type: Number, default: 0},
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
}, { collection: "Reviews" }
);
export default reviewsSchema;