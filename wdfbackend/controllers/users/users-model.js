import mongoose from "mongoose";
import usersSchema from "./users-schema.js";
// I changed this from "buyers" - Noah
const userModel = mongoose.model('User', usersSchema);
export default userModel;
