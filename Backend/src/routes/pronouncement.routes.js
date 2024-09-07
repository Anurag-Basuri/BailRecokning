import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  addAnouncement,
  editAnouncement,
  getAllAnouncement,
} from "../controllers/pronouncement.controller.js";

const router = Router();

router
  .route("/:caseId")
  .post(verifyJWT, addAnouncement)
  .get(verifyJWT, getAllAnouncement);

router.route("/:pronouncementId").post(verifyJWT, editAnouncement);

export default router;
