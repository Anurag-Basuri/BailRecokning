import mongoose, { Schema } from "mongoose";

const previusCaseSchema = new mongoose.Schema(
  {
    accused: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    // charges: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Law",
    //     // type: String,
    //     // lowercase: true,
    //   },
    // ],
    charges: {
      type:String,
    },
    caseId: {
      // in govt database
      type: String,
      lowercase: true,
    },
    caseSummary: {
      type: String,
      lowercase: true,
      required: true,
    },
    caseDetail: {
      type: String,
      lowercase: true,
      required: true,
    },
    outcome: {
      type: String,
      lowercase: true,
      required: true,
    },
    riskScore: {
      type: Number,
    },
    penaltyAmount: {
      type: Number,
    },
    dateOfArrest: {
      type: Date,
    },
    imprisonmentDuration: {
      // accused has served
      type: Number,
    },
    suretyAmount: {
      type: Number,
    },
    personalBondAmount: {
      type: Number,
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
    keyword: [
      {
        type: String,
        lowercase: true,
      },
    ],
  },
  { timestamps: true }
);

export const PreviousCase = mongoose.model("PreviousCase", previusCaseSchema);
