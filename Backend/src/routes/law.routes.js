import {Router } from "express"
import { verifyJWT } from "../middleware/auth.middleware.js";
import { addlaw, getLaw } from "../controllers/law.controller.js";

const router = Router()

router.route("/add").post(verifyJWT,addlaw);
router.route("/:lawId").get(verifyJWT,getLaw);

export default router;
