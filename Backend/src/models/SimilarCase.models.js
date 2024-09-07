import mongoose from "mongoose";

const similarCaseSchema = new mongoose.Schema(
  {
    accused: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    charges: [
      {
        type: Schema.Types.ObjectId,
        ref: "Law",
      },
    ],
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
    keyword: [
      {
        type: String,
        lowercase: true,
      },
    ],
  },
  { timestamps: true }
);

export const SimilarCase = mongoose.model("SimilarCase", similarCaseSchema);
