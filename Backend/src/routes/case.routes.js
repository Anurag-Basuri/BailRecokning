import express from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { validate } from "../middleware/validation.js";
import { caseValidation } from "../middleware/validation.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { upload } from "../utils/fileUpload.js";
import {
  createCase,
  getCase,
  updateCase,
  deleteCase,
  listCases,
  addTimelineEvent,
  updateTimelineEvent,
  deleteTimelineEvent,
} from "../services/case.service.js";

const router = express.Router();

// Apply auth middleware to all routes
router.use(authMiddleware);

// Case routes
router.post("/", validate(caseValidation.create), asyncHandler(createCase));

router.get("/", asyncHandler(listCases));
router.get("/:id", asyncHandler(getCase));
router.patch("/:id", validate(caseValidation.update), asyncHandler(updateCase));
router.delete("/:id", asyncHandler(deleteCase));

// Timeline routes
router.post(
  "/:id/timeline",
  upload.array("documents", 5),
  asyncHandler(addTimelineEvent)
);
router.patch(
  "/:id/timeline/:eventId",
  upload.array("documents", 5),
  asyncHandler(updateTimelineEvent)
);
router.delete("/:id/timeline/:eventId", asyncHandler(deleteTimelineEvent));

export default router;
