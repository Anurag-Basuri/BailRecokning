import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { addCharges, removeCharges } from "../controllers/charges.controller.js";

const router = Router();

router.route("/add").post(verifyJWT, addCharges);
router.route("/remove/:chargeId").post(verifyJWT, removeCharges);

export default router;
