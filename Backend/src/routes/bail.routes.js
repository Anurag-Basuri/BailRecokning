import express from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { validate } from "../middleware/validation.js";
import { bailValidation } from "../middleware/validation.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { upload } from "../utils/fileUpload.js";
import {
  createBail,
  getBail,
  updateBail,
  deleteBail,
  listBails,
  addBailDocument,
  removeBailDocument,
} from "../services/bail.service.js";

const router = express.Router();

// Apply auth middleware to all routes
router.use(authMiddleware);

// Bail routes
router.post("/", validate(bailValidation.create), asyncHandler(createBail));

router.get("/", asyncHandler(listBails));
router.get("/:id", asyncHandler(getBail));
router.patch("/:id", validate(bailValidation.update), asyncHandler(updateBail));
router.delete("/:id", asyncHandler(deleteBail));

// Document routes
router.post(
  "/:id/documents",
  upload.array("documents", 5),
  asyncHandler(addBailDocument)
);
router.delete("/:id/documents/:documentId", asyncHandler(removeBailDocument));

export default router;
