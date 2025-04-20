import express from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { upload } from "../utils/fileUpload.js";
import {
  getLawyer,
  updateLawyer,
  listLawyers,
  getLawyerCases,
  getLawyerBails,
  updateLawyerProfile,
} from "../services/lawyer.service.js";

const router = express.Router();

// Apply auth middleware to all routes
router.use(authMiddleware);

// Lawyer routes
router.get("/", asyncHandler(listLawyers));
router.get("/:id", asyncHandler(getLawyer));
router.patch("/:id", asyncHandler(updateLawyer));

// Lawyer profile routes
router.patch(
  "/:id/profile",
  upload.single("photo"),
  asyncHandler(updateLawyerProfile)
);

// Lawyer cases and bails
router.get("/:id/cases", asyncHandler(getLawyerCases));
router.get("/:id/bails", asyncHandler(getLawyerBails));

export default router;
