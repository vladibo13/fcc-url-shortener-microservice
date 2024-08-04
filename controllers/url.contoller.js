import asyncHandler from "../middlewares/async.midleware.js";
import { customAlphabet } from "nanoid";
import UrlShortner from "../models/url.model.js";

export const urlHandler = asyncHandler(async (req, res) => {
  const { url } = req.body;

  const urlObject = new URL(url);

  const shortUrlId = customAlphabet(process.env.ALPHABET, 5);

  const urlShortner = await UrlShortner.create({
    original_url: urlObject,
    short_url: shortUrlId(),
  });

  res.json({
    original_url: urlShortner.original_url,
    short_url: urlShortner.short_url,
  });
});

export const shortUrlHandler = asyncHandler(async (req, res) => {
  const { short_url } = req.params;

  const shortUrlDb = await UrlShortner.findOne({ short_url });
  if (!shortUrlDb) {
    res.status(404);
    throw new Error("not found");
  }

  res.status(200).redirect(shortUrlDb.original_url);
});
