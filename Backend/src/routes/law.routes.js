import { Router } from "express";
  import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  addlaw,
  getLawByID,
  getLawBySearch,
  addLaws,
  getLawsBySearch,
} from "../controllers/law.controller.js";

const router = Router();

router.route("/add").post(verifyJWT, addlaw);
router.route("/a/addlaws").post(verifyJWT, addLaws);
router.route("/:lawId").get(verifyJWT, getLawByID);
router.route("/search/:section").get(verifyJWT, getLawBySearch);
router.route("/searchs/law").post(verifyJWT, getLawsBySearch);

export default router;
