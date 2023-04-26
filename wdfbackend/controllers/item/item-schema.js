import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
    {
        itemId: { type: Number, required: true, unique: true },
        sellerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserModel',
            required: true
        },
        title: String,
        price: String,
        colors: [String],
        sizes: [String],
        image: String,
    },
    { collection: "Items" }
);
export default itemSchema;