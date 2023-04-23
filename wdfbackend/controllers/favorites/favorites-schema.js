import mongoose from "mongoose";

const favoritesSchema = mongoose.Schema(
  {
    //not sure if it matters that there needs to a ref to another table
    userId: { type: String, required: true },
    itemId: { type: String, required: true },
  },
  { collection: "Favorites" }
);
export default favoritesSchema;
