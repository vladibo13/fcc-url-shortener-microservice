import mongoose from "mongoose";

const urlShortnerSchema = mongoose.Schema(
  {
    original_url: {
      type: String,
      required: true,
    },
    short_url: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const UrlShortner = mongoose.model("UrlShortner", urlShortnerSchema);

export default UrlShortner;
