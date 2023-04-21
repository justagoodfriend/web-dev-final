import mongoose from "mongoose";

const favoritesSchema = mongoose.Schema(
    {
        userId: { type: Number, required: true },
        itemId: { type: Number, required: true },
    },
    { collection: "Favorites" }
);
export default favoritesSchema;