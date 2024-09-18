import mongoose, { Schema } from "mongoose";

const bailSchema = new mongoose.Schema(
  {
    accused: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    bailApplicationName: {
      type: String,
      default: "Untitled Application",
    },
    dateOfArrest: {
      type: Date,
    },
    charges: [
      {
        type: Schema.Types.ObjectId,
        ref: "Law",
      },
    ],
    imprisonmentDuration: {
      // accused has served
      type: Number,
    },
    eligibilityStatus: {
      type: Boolean,
      default: false,
    },
    riskAssessmentScore: {
      type: Number,
      default: 0,
    },
    bailStatus: {
      type: String,
      default: "Pending",
    },
    verdict: {
      type: String,
      lowercase: true,
    },
    lawyer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    judge: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    firCopy: {
      type: String,
    },
    chargeSheet: {
      type: String,
    },
    order: {
      type: String,
    },
    suretyBond: {
      type: String,
    },
    affidavit: {
      type: String,
    },
    identityProof: {
      type: String,
    },
    addressProof: {
      type: String,
    },
    backgroundInformation: {
      type: String,
    },
    passport: {
      type: String,
    },
    anticipatoryBailApplication: {
      type: String,
    },
    caseDetails: {
      type: String,
    },
    medicalRecords: {
      type: String,
    },
    interimBailApplication: {
      type: String,
    },
    bailApplicationDefaultBail: {
      type: String,
    },
    remand: {
      type: String,
    },
    custodyCertificate: {
      type: String,
    },
    nonFilingOfChargeSheet: {
      type: String,
    },
    policeReport: {
      type: String,
    },
    bailBond: {
      type: String,
    },
    suretyDocument: {
      type: String,
    },
    personalIDOA: {
      type: String,
    },
    vakalatnama: {
      type: String,
    },
    affidavitsDefaultBail: {
      type: String,
    },
    familyDependents: {
      type: Object,
      default: {
        dependents: false,
        parents: false,
        married: false,
        noOfChildren: 0,
      },
    },
    health: {
      type: Object,
      default: {
        healthIssue: false,
        deatils: "",
      },
    },
    gender: {
      type: String,
    },
    age: {
      type: Number,
    },
    violence: {
      type: Boolean,
      default: false,
    },
    typeBail: {
      type: String,
      default: "Regular",
    },
  },
  { timestamps: true }
);

export const Bail = mongoose.model("Bail", bailSchema);
