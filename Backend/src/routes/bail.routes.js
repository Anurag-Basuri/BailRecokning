import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  deleteBail,
  addBail,
  getAllBail,
  getBail,
  getAllUserBail,
  getBailByStatus,
} from "../controllers/bail.controller.js";

const router = Router();

router.route("/add").get(verifyJWT, addBail);
router.route("/:bailId").get(verifyJWT, getBail).delete(verifyJWT, deleteBail);
router.route("/u/all").get(verifyJWT, getAllUserBail);
router.route("/a/all").get( getAllBail);
router.route("/status/:bailStatus").get( getBailByStatus);


export default router;
