import mongoose, { Schema } from "mongoose";

const pronouncementSchema = new mongoose.Schema(
  {
    caseId: {
      type: Schema.Types.ObjectId,
      ref: "Bail",
      required: true,
    },
    message: {
      // it will contain
      type: Object,
      default: {},
      required: true,
    },
  },
  { timestamps: true }
);

export const Pronouncement = mongoose.model(
  "Pronouncement",
  pronouncementSchema
);
