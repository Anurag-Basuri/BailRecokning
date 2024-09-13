import { Router } from "express";
  import { verifyJWT } from "../middleware/auth.middleware.js";
import { addPreviousCase, editPreviousCase, getPreviousCaseById } from "../controllers/previousCase.controller.js";

const router = Router();

router.route("/add").post(verifyJWT,addPreviousCase);
router.route("/p/:previousCaseId").post(verifyJWT, editPreviousCase).get(verifyJWT,getPreviousCaseById)


export default router;