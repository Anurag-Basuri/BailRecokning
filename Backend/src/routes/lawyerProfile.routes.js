import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  addDetails,
  editDetails,
  getAllLawyers,
  getProfileById,
  getProfileByUserId,
} from "../controllers/lawyerProfile.controller.js";

const router = Router();

router.route("/add/:userId").post(addDetails);
router
  .route("/:profileId")
  .post(verifyJWT, editDetails)
  .get(verifyJWT, getProfileById);

router.route("/l/all").get(verifyJWT, getAllLawyers);

router.route("/u/:userId").get(verifyJWT, getProfileByUserId);

export default router;
