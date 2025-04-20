import express from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { validate } from "../middleware/validation.js";
import { userValidation } from "../middleware/validation.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
} from "../services/user.service.js";
import {
  loginUser,
  logoutUser,
  registerUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  getAllJudges,
  getAllLawyersWithActivate,
  updateUserAvatar,
  toggleMode,
  searchLawyersWithActivate,
} from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = express.Router();

// Apply auth middleware to all routes
router.use(authMiddleware);

// Get user profile
router.get("/profile", asyncHandler(getUserProfile));

// Update user profile
router.patch(
  "/profile",
  validate(userValidation.update),
  asyncHandler(updateUserProfile)
);

// Delete user profile
router.delete("/profile", asyncHandler(deleteUserProfile));

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

// secure routes
router.route("/logout").post(logoutUser);
router.route("/current-user").get(getCurrentUser);
router.route("/allLawyers").get(getAllLawyersWithActivate);
router.route("/allJudge").get(getAllJudges);
router.route("/change-password").post(changeCurrentPassword);
router.route("/refreshToken").post(refreshAccessToken);
router.route("/update-account").patch(updateAccountDetails);
router
  .route("/upload-profile-photo")
  .post(upload.single("avatar"), updateUserAvatar);
router.route("/toggleMode").get(toggleMode);
router.route("/searchLawyer").post(searchLawyersWithActivate);

export default router;
