import mongoose from "mongoose";
const followsSchema = new mongoose.Schema(
  {
    follower: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Accounts",
    },
    following: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Accounts",
    },
  },
  { collection: "followers" }
);

export default followsSchema;
