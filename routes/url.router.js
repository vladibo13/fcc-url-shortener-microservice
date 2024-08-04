import express from "express";
import { urlHandler, shortUrlHandler } from "../controllers/url.contoller.js";

const router = express.Router();

router.route("/shorturl").post(urlHandler);
router.route("/shorturl/:short_url").get(shortUrlHandler);

export default router;
