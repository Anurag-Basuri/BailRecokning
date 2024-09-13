import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  addCase,
  editCase,
  getCaseById,
} from "../controllers/similarCase.controller.js";

const router = Router();

router.route("/add").post(verifyJWT, addCase);
router
  .route("/s/:previousCaseId")
  .post(verifyJWT, editCase)
  .get(verifyJWT, getCaseById);

export default router;
