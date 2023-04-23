import mongoose from "mongoose";
import favoritesSchema from "./favorites-schema.js";
const favoritesModel = mongoose.model("favorites", favoritesSchema);
export default favoritesModel;