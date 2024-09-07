import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { addJudge, removeJudge } from "../controllers/judge.controller.js";

const router = Router();

router.route("/add").post(verifyJWT, addJudge);
router.route("/remove/:judgeId").post(verifyJWT, removeJudge);

export default router;
