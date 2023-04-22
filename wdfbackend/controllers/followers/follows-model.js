import mongoose from "mongoose";
import followsSchema from "./followers-schema";
const followsModel = mongoose.model("follows", followsSchema);
export default followsModel;
