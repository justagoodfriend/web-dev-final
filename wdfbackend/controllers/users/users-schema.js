import mongoose from "mongoose";
//items wanted for the buyer:
const usersSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: {type: String, required:true, unique:true },
    // either or relationship -- buyers have reviews, sellers have items for sale. 
    reviews: {type: Buffer, required: false},
    wishlist: {type: Buffer, required: false},
    items: {type: Buffer, required: false},
    image: { type: String, requred: false }
  },
  { collection: 'accounts' }
);
export default usersSchema;
