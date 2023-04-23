import mongoose from "mongoose";
import itemSchema from "./item-schema.js";
const itemModel = mongoose.model("item", itemSchema);
export default itemModel;