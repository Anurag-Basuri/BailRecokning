import { Router } from "express";
  import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  addlaw,
  getLawByID,
  getLawBySearch,
  addLaws,
  getLawsBySearch,
  getAllLaws,
} from "../controllers/law.controller.js";

const router = Router();

router.route("/add").post(verifyJWT, addlaw);
router.route("/a/addlaws").post(verifyJWT, addLaws);
router.route("/:lawId").get(verifyJWT, getLawByID);
router.route("/search/:section").get(verifyJWT, getLawBySearch);
router.route("/searchs/law").post( getLawsBySearch);
router.route("/all/laws").get( getAllLaws);

export default router;
