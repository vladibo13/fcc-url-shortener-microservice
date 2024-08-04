import asyncHandler from "../middlewares/async.middleware.js";

export const urlHandler = asyncHandler(async (req, res) => {
  res.json({ msg: "test" });
});
