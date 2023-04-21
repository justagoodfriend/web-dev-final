import mongoose from "mongoose";
//items wanted for the buyer:
const usersSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // email should definitely be required.
    email: {type: String, required:true, unique:true },
    reviews: {type: Buffer, required: false},
    items: {type:Buffer, required:false},
    Name: String,
    phone: String,
  },
  { collection: 'accounts' }
);
export default usersSchema;
