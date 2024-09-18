import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  deleteBail,
  addBail,
  getAllBail,
  getBail,
  getAllUserBail,
  getBailByStatus,
  RenameBail,
  addLawyerOfBail,
  updatePersonalDetails,
  submitRegularBail,
  submitAnticipatoryBail,
  submitInterimBail,
  submitDefaultBail,
} from "../controllers/bail.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

router.route("/add").get(verifyJWT, addBail);
router
  .route("/:bailId")
  .get(verifyJWT, getBail)
  .delete(verifyJWT, deleteBail)
  .patch(verifyJWT, RenameBail);
router.route("/u/all").get(verifyJWT, getAllUserBail);
router.route("/a/all").get(getAllBail);
router.route("/status/:bailStatus").get(verifyJWT, getBailByStatus);
router.route("/lawyer/:lawyerId").get(verifyJWT, addLawyerOfBail);
// router.route("/lawyer/:lawyerId").get( getBailByStatus);
router.route("/personalDetails/:bailId").post(verifyJWT, updatePersonalDetails);
// router.route("/uploadFirCopy/:bailId").post(verifyJWT,  upload.single("firCopy"),uploadFirCopy);
router.route("/regularBail/:bailId").post(
  verifyJWT,
  upload.fields([
    {
      name: "firCopy",
      maxCount: 1,
    },
    {
      name: "chargeSheet",
      maxCount: 1,
    },
    {
      name: "order",
      maxCount: 1,
    },
    {
      name: "suretyBond",
      maxCount: 1,
    },
    {
      name: "affidavit",
      maxCount: 1,
    },
    {
      name: "identityProof",
      maxCount: 1,
    },
    {
      name: "addressProof",
      maxCount: 1,
    },
    {
      name: "passport",
      maxCount: 1,
    },
  ]),
  submitRegularBail
);
router.route("/anticipatoryBail/:bailId").post(
  verifyJWT,
  upload.fields([
    {
      name: "antiApp",
      maxCount: 1,
    },
    {
      name: "firCopy",
      maxCount: 1,
    },
    {
      name: "chargeSheet",
      maxCount: 1,
    },
    {
      name: "suretyBond",
      maxCount: 1,
    },
    {
      name: "affidavit",
      maxCount: 1,
    },
    {
      name: "identityProof",
      maxCount: 1,
    },
    {
      name: "addressProof",
      maxCount: 1,
    },
    {
      name: "passport",
      maxCount: 1,
    },
    {
      name: "medicalRecords",
      maxCount: 1,
    },
  ]),
  submitAnticipatoryBail
);

router.route("/interimBail/:bailId").post(
  verifyJWT,
  upload.fields([
    {
      name: "interimApp",
      maxCount: 1,
    },
    {
      name: "firCopy",
      maxCount: 1,
    },
    {
      name: "chargeSheet",
      maxCount: 1,
    },
    {
      name: "suretyBond",
      maxCount: 1,
    },
    {
      name: "affidavit",
      maxCount: 1,
    },
    {
      name: "identityProof",
      maxCount: 1,
    },
    {
      name: "addressProof",
      maxCount: 1,
    },
    {
      name: "order",
      maxCount: 1,
    },
    {
      name: "medicalRecords",
      maxCount: 1,
    },
  ]),
  submitInterimBail
);

router.route("/defaultBail/:bailId").post(
  verifyJWT,
  upload.fields([
    {
      name: "bailApp",
      maxCount: 1,
    },
    {
      name: "firCopy",
      maxCount: 1,
    },
    {
      name: "remand",
      maxCount: 1,
    },
    {
      name: "custodyCertificate",
      maxCount: 1,
    },
    {
      name: "nonFilingOfChargeSheet",
      maxCount: 1,
    },
    {
      name: "policeReport",
      maxCount: 1,
    },
    {
      name: "bailBond",
      maxCount: 1,
    },
    {
      name: "affidavitsDefaultBail",
      maxCount: 1,
    },
    {
      name: "personalIDOA",
      maxCount: 1,
    },
    {
      name: "suretyDocument",
      maxCount: 1,
    },
    {
      name: "vakalatnama",
      maxCount: 1,
    },
  ]),
  submitDefaultBail
);

export default router;
