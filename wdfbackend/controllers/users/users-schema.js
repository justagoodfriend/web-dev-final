import mongoose from "mongoose";
//items wanted for the buyer:
const usersSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    handle: { type: String, required: true, unique: true },
    Name: String,
    email: String,
    phone: String,
  },
  { collection: "Accounts" }
);
export default usersSchema;
