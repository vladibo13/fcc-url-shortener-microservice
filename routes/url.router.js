import express from "express";
import { urlHandler } from "../controllers/url.controller.js";

const router = express.Router();

router.route("/").get(urlHandler);

export default router;
