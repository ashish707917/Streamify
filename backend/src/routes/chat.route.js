import express from "express";

import {protectRoute} from "../middleware/auth.middlreware.js"
import {getStreamToken} from "../controllers/chat.controller.js"
const router = express.Router();

router.get("/token", protectRoute, getStreamToken);

export default router;