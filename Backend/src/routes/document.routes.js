import express from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";
import {
  uploadDocument,
  getDocument,
  deleteDocument,
  listDocuments,
  updateDocument,
} from "../services/document.service.js";

const router = express.Router();

// Apply auth middleware to all routes
router.use(authMiddleware);

// Document routes
router.post("/", upload.single("file"), asyncHandler(uploadDocument));
router.patch("/:id", upload.single("file"), asyncHandler(updateDocument));

router.get("/", asyncHandler(listDocuments));
router.get("/:id", asyncHandler(getDocument));
router.delete("/:id", asyncHandler(deleteDocument));

export default router;
