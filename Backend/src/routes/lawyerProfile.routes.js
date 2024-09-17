import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  addDetails,
  editDetails,
  getAllLawyers,
  getLawyerWithActivate,
  getProfileById,
  getProfileByUserId,
  getProfileBySearch,
  activateLawyerAccount,
  deactivateLawyerAccount,
} from "../controllers/lawyerProfile.controller.js";

const router = Router();

router.route("/add/:userId").post(addDetails);
router
  .route("/:profileId")
  .post(verifyJWT, editDetails)
  .get(verifyJWT, getProfileById);

router.route("/l/all").get(verifyJWT, getAllLawyers);
router.route("/l/all/active").get(verifyJWT, getLawyerWithActivate);
router.route("/l/all/active/:pName").get(verifyJWT, getProfileBySearch);

router.route("/u/:userId").get(verifyJWT, getProfileByUserId);
router.route("/activate/:profileId").get(verifyJWT, activateLawyerAccount);
router.route("/deactivate/:profileId").get(verifyJWT, deactivateLawyerAccount);

export default router;
