import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  addCharges,
  removeCharges,
  getallCharges,
  getallChargesWithLaw,
} from "../controllers/charges.controller.js";

const router = Router();

router.route("/add").post(verifyJWT, addCharges);
router.route("/:chargeId").post(verifyJWT, removeCharges);
router.route("/b/:bailId").get(verifyJWT, getallCharges);
router.route("/b/l/:bailId").get(verifyJWT, getallChargesWithLaw);

export default router;
