import express from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import {
  getJudge,
  updateJudge,
  listJudges,
  getJudgeCases,
  getJudgeBails,
} from "../services/judge.service.js";

const router = express.Router();

// Apply auth middleware to all routes
router.use(authMiddleware);

// Judge routes
router.get("/", asyncHandler(listJudges));
router.get("/:id", asyncHandler(getJudge));
router.patch("/:id", asyncHandler(updateJudge));

// Judge cases and bails
router.get("/:id/cases", asyncHandler(getJudgeCases));
router.get("/:id/bails", asyncHandler(getJudgeBails));

export default router;
