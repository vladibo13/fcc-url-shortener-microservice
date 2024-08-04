import mongoose from "mongoose";

const urlSchema = mongoose.Schema(
  {
    original_url: {
      type: String,
      required: true,
    },
    short_url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Url", urlSchema);

export default User;
