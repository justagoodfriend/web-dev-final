import mongoose from "mongoose";
import usersSchema from "./users-schema.js";
const userModel = mongoose.model("buyers", usersSchema);
export default userModel;
