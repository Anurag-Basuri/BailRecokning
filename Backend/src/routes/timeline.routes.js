import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  addtimeline,
  getAllWithBailId,
} from "../controllers/timeline.controller.js";

const router = Router();

router.route("/add/:bailId").post(verifyJWT, addtimeline);
router.route("/:bailId").get(verifyJWT, getAllWithBailId);

export default router;
