import { Bail } from "../models/bail.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import mongoose from "mongoose";
import { uploadOnCloudinary } from "../utils/fileUpload.js";

const addBail = asyncHandler(async (req, res) => {
  const bail = await Bail.create({
    accused: req.user._id,
  });

  if (!bail) {
    throw new ApiError(500, "something went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, bail, "successfully created bail "));
});

const RenameBail = asyncHandler(async (req, res) => {
  const { bailName } = req.body;
  const { bailId } = req.params;

  if (!(bailName && bailId)) {
    throw new ApiError(400, "all fields are required");
  }

  const bail = await Bail.findByIdAndUpdate(
    bailId,
    { bailApplicationName: bailName },
    { new: true }
  );

  if (!bail) {
    throw new ApiError(500, "something went wrong");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, bail, "successfully renamed the bail application ")
    );
});

const deleteBail = asyncHandler(async (req, res) => {
  const { bailId } = req.params;

  if (!bailId) {
    throw new ApiError(400, "id is required");
  }

  const bail = await Bail.deleteOne({
    _id: bailId,
  });

  if (!bail) {
    throw new ApiError(500, "something went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, bail, "successfully deleted bail "));
});

const getBail = asyncHandler(async (req, res) => {
  const { bailId } = req.params;

  if (!bailId) {
    throw new ApiError(400, "id is required");
  }

  const bail = await Bail.findById(bailId);

  if (!bail) {
    throw new ApiError(404, "not found or incorrect id");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, bail, "successfully feched bail info"));
});

const getAllUserBail = asyncHandler(async (req, res) => {
  const bail = await Bail.aggregate([
    {
      $match: {
        accused: new mongoose.Types.ObjectId(req.user._id),
      },
    },
  ]);

  if (!bail) {
    throw new ApiError(404, "not found or incorrect id");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, { bail }, "successfully feched all user bails ")
    );
});

const getAllBail = asyncHandler(async (req, res) => {
  const bail = await Bail.find({}, { bailStatus: 1 });

  if (!bail) {
    throw new ApiError(404, "not found or incorrect id");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { bail }, "successfully feched all bails "));
});

const getBailByStatus = asyncHandler(async (req, res) => {
  const { bailStatus } = req.params;

  const bail = await Bail.aggregate([
    {
      $match: {
        bailStatus,
      },
    },
    {
      $project: {
        // _id: 1,
        bailStatus: 1,
      },
    },
  ]);

  if (!bail) {
    throw new ApiError(404, "Bail not found or incorrect status");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { bail },
        `Successfully fetched all ${bailStatus} bails`
      )
    );
});

const addLawyerOfBail = asyncHandler(async (req, res) => {
  const { bailId } = req.body; // lawyer userId
  const { lawyerId } = req.params;

  const bail = await Bail.findByIdAndUpdate(
    bailId,
    { lawyer: lawyerId },
    { new: true }
  );

  if (!bail) {
    throw new ApiError(404, "Bail not found or incorrect status");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, { bail }, `Successfully added lawyer to the bails`)
    );
});

const updatePersonalDetails = asyncHandler(async (req, res) => {
  const { familyDependents, health, gender, age, violence } = req.body;
  const { bailId } = req.params;
  if (!age && !gender) {
    throw new ApiError(400, "all fields are required");
  }

  const bail = await Bail.findByIdAndUpdate(
    bailId,
    {
      familyDependents,
      health,
      gender,
      age,
      violence,
    },
    { new: true }
  );

  if (!bail) {
    throw new ApiError(500, "Something went wrong");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, { bail }, "successfully added personal details")
    );
});

const submitRegularBail = asyncHandler(async (req, res) => {
  console.log(req.files);
  const { backgroundInformation, typeBail } = req.body;
  const firLocalPath = req.files?.firCopy[0].path;
  const chargeSheetLocalPath = req.files?.chargeSheet[0].path;
  const orderLocalPath = req.files?.order[0].path;
  const suretyBondLocalPath = req.files?.suretyBond[0].path;
  const affidavitLocalPath = req.files?.affidavit[0].path;
  const identityProofLocalPath = req.files?.identityProof[0].path;
  const addressProofLocalPath = req.files?.addressProof[0].path;
  const passportLocalPath = req.files?.passport[0].path;
  const { bailId } = req.params;

  if (
    [
      firLocalPath,
      chargeSheetLocalPath,
      orderLocalPath,
      suretyBondLocalPath,
      affidavitLocalPath,
      identityProofLocalPath,
      addressProofLocalPath,
      passportLocalPath,
      typeBail,
    ].some((fields) => fields?.trim() === "")
  ) {
    throw new ApiError(400, "all fields are required");
  }

  const firCopy = await uploadOnCloudinary(firLocalPath);
  const chargeSheet = await uploadOnCloudinary(chargeSheetLocalPath);
  const order = await uploadOnCloudinary(orderLocalPath);
  const suretyBond = await uploadOnCloudinary(suretyBondLocalPath);
  const affidavit = await uploadOnCloudinary(affidavitLocalPath);
  const identityProof = await uploadOnCloudinary(identityProofLocalPath);
  const addressProof = await uploadOnCloudinary(addressProofLocalPath);
  const passport = await uploadOnCloudinary(passportLocalPath);

  // console.log(firCopyy);
  // console.log(chargeSheett);
  if (!firCopy) {
    throw new ApiError(400, "FirCopy is required");
  }
  if (!chargeSheet) {
    throw new ApiError(400, "ChargeSheett is required");
  }
  if (!order) {
    throw new ApiError(400, "order is required");
  }
  if (!suretyBond) {
    throw new ApiError(400, "suretyBond is required");
  }
  if (!affidavit) {
    throw new ApiError(400, "affidavit is required");
  }
  if (!identityProof) {
    throw new ApiError(400, "identityProof is required");
  }
  if (!addressProof) {
    throw new ApiError(400, "addressProof is required");
  }
  if (!passport) {
    throw new ApiError(400, "passport is required");
  }

  const bail = await Bail.findByIdAndUpdate(
    bailId,
    {
      firCopy: firCopy.url,
      chargeSheet: chargeSheet.url,
      order: order.url,
      suretyBond: suretyBond.url,
      affidavit: affidavit.url,
      identityProof: identityProof.url,
      addressProof: addressProof.url,
      passport: passport.url,
      backgroundInformation,
      typeBail,
    },
    { new: true }
  );

  if (!bail) {
    throw new ApiError(500, "something went wrong");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, { bail }, "Successsfully submited regular bail")
    );
});

const submitAnticipatoryBail = asyncHandler(async (req, res) => {
  console.log(req.files);
  const antiAppLocalPath = req.files?.antiApp[0].path;
  const firLocalPath = req.files?.firCopy[0].path;
  const chargeSheetLocalPath = req.files?.chargeSheet[0].path;
  const suretyBondLocalPath = req.files?.suretyBond[0].path;
  const affidavitLocalPath = req.files?.affidavit[0].path;
  const identityProofLocalPath = req.files?.identityProof[0].path;
  const addressProofLocalPath = req.files?.addressProof[0].path;
  const medicalRecordsLocalPath = req.files?.medicalRecords[0].path;
  // const passportLocalPath = req.files?.passport[0].path;
  const { caseDetails, typeBail } = req.body;
  const { bailId } = req.params;

  if (
    [
      antiAppLocalPath,
      firLocalPath,
      chargeSheetLocalPath,
      suretyBondLocalPath,
      affidavitLocalPath,
      identityProofLocalPath,
      addressProofLocalPath,
      // passportLocalPath,
      caseDetails,
      medicalRecordsLocalPath,
      typeBail,
    ].some((fields) => fields?.trim() === "")
  ) {
    throw new ApiError(400, "all fields are required");
  }

  const anticipatoryApplication = await uploadOnCloudinary(antiAppLocalPath);
  const firCopy = await uploadOnCloudinary(firLocalPath);
  const chargeSheet = await uploadOnCloudinary(chargeSheetLocalPath);
  const suretyBond = await uploadOnCloudinary(suretyBondLocalPath);
  const affidavit = await uploadOnCloudinary(affidavitLocalPath);
  const identityProof = await uploadOnCloudinary(identityProofLocalPath);
  const addressProof = await uploadOnCloudinary(addressProofLocalPath);
  // const passport = await uploadOnCloudinary(passportLocalPath);
  const medicalRecords = await uploadOnCloudinary(medicalRecordsLocalPath);

  if (!firCopy) {
    throw new ApiError(400, "FirCopy is required");
  }
  if (!chargeSheet) {
    throw new ApiError(400, "ChargeSheett is required");
  }
  if (!anticipatoryApplication) {
    throw new ApiError(400, "anticipatoryApplication is required");
  }
  if (!suretyBond) {
    throw new ApiError(400, "suretyBond is required");
  }
  if (!affidavit) {
    throw new ApiError(400, "affidavit is required");
  }
  if (!identityProof) {
    throw new ApiError(400, "identityProof is required");
  }
  if (!addressProof) {
    throw new ApiError(400, "addressProof is required");
  }
  // if (!passport) {
  //   throw new ApiError(400, "passport is required");
  // }
  if (!medicalRecords) {
    throw new ApiError(400, "medicalRecords is required");
  }

  const bail = await Bail.findByIdAndUpdate(
    bailId,
    {
      anticipatoryBailApplication: anticipatoryApplication.url,
      firCopy: firCopy.url,
      chargeSheet: chargeSheet.url,
      suretyBond: suretyBond.url,
      affidavit: affidavit.url,
      identityProof: identityProof.url,
      addressProof: addressProof.url,
      // passport: passport.url,
      medicalRecords: medicalRecords.url,
      caseDetails,
      typeBail,
    },
    { new: true }
  );
  // console.log(bail);

  if (!bail) {
    throw new ApiError(500, "something went wrong");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, { bail }, "successfully submitted anticipatary bail")
    );
});

const submitInterimBail = asyncHandler(async (req, res) => {
  const interimAppLocalPath = req.files?.interimApp[0].path;
  const firLocalPath = req.files?.firCopy[0].path;
  const chargeSheetLocalPath = req.files?.chargeSheet[0].path;
  const suretyBondLocalPath = req.files?.suretyBond[0].path;
  const affidavitLocalPath = req.files?.affidavit[0].path;
  const identityProofLocalPath = req.files?.identityProof[0].path;
  const addressProofLocalPath = req.files?.addressProof[0].path;
  const medicalRecordsLocalPath = req.files?.medicalRecords[0].path;
  const orderLocalPath = req.files?.order[0].path;
  const { typeBail } = req.body;
  const { bailId } = req.params;

  if (
    [
      interimAppLocalPath,
      firLocalPath,
      chargeSheetLocalPath,
      suretyBondLocalPath,
      affidavitLocalPath,
      identityProofLocalPath,
      addressProofLocalPath,
      orderLocalPath,
      medicalRecordsLocalPath,
      typeBail,
    ].some((fields) => fields?.trim() === "")
  ) {
    throw new ApiError(400, "all fields are required");
  }

  const interimApp = await uploadOnCloudinary(interimAppLocalPath);
  const firCopy = await uploadOnCloudinary(firLocalPath);
  const chargeSheet = await uploadOnCloudinary(chargeSheetLocalPath);
  const suretyBond = await uploadOnCloudinary(suretyBondLocalPath);
  const affidavit = await uploadOnCloudinary(affidavitLocalPath);
  const identityProof = await uploadOnCloudinary(identityProofLocalPath);
  const addressProof = await uploadOnCloudinary(addressProofLocalPath);
  const order = await uploadOnCloudinary(orderLocalPath);
  const medicalRecords = await uploadOnCloudinary(medicalRecordsLocalPath);

  if (!firCopy && !interimApp) {
    throw new ApiError(400, "something went wrong");
  }
  if (!chargeSheet) {
    throw new ApiError(400, "ChargeSheett is required");
  }
  if (!suretyBond) {
    throw new ApiError(400, "suretyBond is required");
  }
  if (!affidavit && !order) {
    throw new ApiError(400, "affidavit order is required");
  }
  if (!identityProof && !addressProof) {
    throw new ApiError(400, "identityProof addressProofis required");
  }
  if (!medicalRecords) {
    throw new ApiError(400, "medicalRecords is required");
  }

  const bail = await Bail.findByIdAndUpdate(
    bailId,
    {
      interimBailApplication: interimApp.url,
      firCopy: firCopy.url,
      chargeSheet: chargeSheet.url,
      suretyBond: suretyBond.url,
      affidavit: affidavit.url,
      identityProof: identityProof.url,
      addressProof: addressProof.url,
      order: order.url,
      medicalRecords: medicalRecords.url,
      typeBail,
    },
    { new: true }
  );
  // console.log(bail);

  if (!bail) {
    throw new ApiError(500, "something went wrong");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, { bail }, "successfully submitted interim bail")
    );
});

const submitDefaultBail = asyncHandler(async (req, res) => {
  // console.log(req.files);
  const bailAppLocalPath = req.files?.bailApp[0].path;
  const remandPath = req.files?.remand[0].path;
  const firLocalPath = req.files?.firCopy[0].path;
  const custodyCertificateLocalPath = req.files?.custodyCertificate[0].path;
  const nonFilingOfChargeSheetLocalPath =
    req.files?.nonFilingOfChargeSheet[0].path;
  const policeReportLocalPath = req.files?.policeReport[0].path;
  const bailBondLocalPath = req.files?.bailBond[0].path;
  const personalIDOALocalPath = req.files?.personalIDOA[0].path;
  const suretyDocumentLocalPath = req.files?.suretyDocument[0].path;
  const affidavitsDefaultBailLocalPath =
    req.files?.affidavitsDefaultBail[0].path;
  const vakalatnamaLocalPath = req.files?.vakalatnama[0].path;

  const { typeBail } = req.body;
  const { bailId } = req.params;

  if (
    [
      bailAppLocalPath,
      remandPath,
      firLocalPath,
      custodyCertificateLocalPath,
      nonFilingOfChargeSheetLocalPath,
      policeReportLocalPath,
      bailBondLocalPath,
      personalIDOALocalPath,
      suretyDocumentLocalPath,
      affidavitsDefaultBailLocalPath,
      vakalatnamaLocalPath,
      typeBail,
    ].some((fields) => fields?.trim() === "")
  ) {
    throw new ApiError(400, "all fields are required");
  }

  const bailApp = await uploadOnCloudinary(bailAppLocalPath);
  const firCopy = await uploadOnCloudinary(firLocalPath);
  const remand = await uploadOnCloudinary(remandPath);
  const custodyCertificate = await uploadOnCloudinary(
    custodyCertificateLocalPath
  );
  const nonFilingOfChargeSheet = await uploadOnCloudinary(
    nonFilingOfChargeSheetLocalPath
  );
  const policeReport = await uploadOnCloudinary(policeReportLocalPath);
  const bailBond = await uploadOnCloudinary(bailBondLocalPath);
  const personalIDOA = await uploadOnCloudinary(personalIDOALocalPath);
  const suretyDocument = await uploadOnCloudinary(suretyDocumentLocalPath);
  const affidavitsDefaultBail = await uploadOnCloudinary(
    affidavitsDefaultBailLocalPath
  );
  const vakalatnama = await uploadOnCloudinary(vakalatnamaLocalPath);

  if (
    !bailApp ||
    !firCopy ||
    !remand ||
    !custodyCertificate ||
    !nonFilingOfChargeSheet ||
    !policeReport ||
    !bailBond ||
    !personalIDOA ||
    !suretyDocument ||
    !affidavitsDefaultBail
  ) {
    throw new ApiError(400, "something went wrong");
  }

  const bail = await Bail.findByIdAndUpdate(
    bailId,
    {
      bailApplicationDefaultBail: bailApp.url,
      firCopy: firCopy.url,
      remand: remand.url,
      custodyCertificate: custodyCertificate.url,
      nonFilingOfChargeSheet: nonFilingOfChargeSheet.url,
      policeReport: policeReport.url,
      bailBond: bailBond.url,
      suretyDocument: suretyDocument.url,
      personalIDOA: personalIDOA.url,
      affidavitsDefaultBail: affidavitsDefaultBail.url,
      vakalatnama: vakalatnama.url,
      typeBail,
    },
    { new: true }
  );

  if (!bail) {
    throw new ApiError(500, "something went wrong");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, { bail }, "successfully submitted default bail")
    );
});

export {
  addBail,
  getBail,
  getAllBail,
  getAllUserBail,
  deleteBail,
  getBailByStatus,
  RenameBail,
  addLawyerOfBail,
  updatePersonalDetails,
  submitRegularBail,
  submitAnticipatoryBail,
  submitInterimBail,
  submitDefaultBail,
};
