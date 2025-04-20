import express from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { validate } from "../middleware/validation.js";
import { userValidation } from "../middleware/validation.js";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
} from "../services/user.service.js";

const router = express.Router();

// Register route
router.post(
  "/register",
  validate(userValidation.register),
  asyncHandler(registerUser)
);

// Login route
router.post("/login", validate(userValidation.login), asyncHandler(loginUser));

// Logout route
router.post("/logout", asyncHandler(logoutUser));

// Refresh token route
router.post("/refresh-token", asyncHandler(refreshAccessToken));

export default router;
