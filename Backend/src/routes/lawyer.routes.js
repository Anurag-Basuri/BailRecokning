import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { addLawyer, removeLawyer } from "../controllers/lawyer.controller.js";

const router = Router();

router.route("/add").post(verifyJWT, addLawyer);
router.route("/remove/:lawyerId").post(verifyJWT, removeLawyer);

export default router;
