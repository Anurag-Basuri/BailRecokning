import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { addBail, getBail } from "../controllers/bail.controller.js";

const router = Router();

router.route("/add").post(verifyJWT, addBail);
router.route("/:bailId").post(verifyJWT, getBail);

export default router;
