import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  getAllJudges,
  getAllLawyers,
  updateUserAvatar,
  toggleMode,
} from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

// secure routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/allLawyers").get(verifyJWT, getAllLawyers);
router.route("/allJudge").get(verifyJWT, getAllJudges);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/refreshToken").post(refreshAccessToken);
router.route("/update-account").patch(verifyJWT, updateAccountDetails);
router
.route("/upload-profile-photo")
.post(verifyJWT, upload.single("avatar"), updateUserAvatar);
router.route("/toggleMode").get(verifyJWT, toggleMode);

export default router;
