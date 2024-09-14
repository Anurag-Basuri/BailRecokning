import mongoose, { Schema } from "mongoose";

const lawSchema = new mongoose.Schema({
  lawName: {
    type: String,
    required: true,
    lowercase: true,
  },
  chapter: {
    type: Number,
  },
  section: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  sectionTitle: {
    type: String,
    required: true,
    lowercase: true,
  },
  sectionDesc: {
    type: String,
    required: true,
    lowercase: true,
  },
  explanation: {
    type: String,
    lowercase: true,
  },
  exception: {
    type: String,
    lowercase: true,
  },
  illustration: {
    // can remove if not needed
    type: String,
    lowercase: true,
  },
  punishment: {
    type: String,
    lowercase: true,
  },
  penaltyDescription: {
    type: String,
    lowercase: true,
  },
  congnisable: {
    type: Boolean,
  },
  bailable: {
    type: String,
    lowercase: true,
  },
  triableByCourt: {
    type: String,
    lowercase: true,
  },
  compoundable: {
    type: Boolean,
  },
  fineAmount: {
    type: Number,
  },
  specialCategories: {
    type: String,
    lowercase: true,
  },
  maxImprisonment: {
    type: Number,
  },
    relatedStatutes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Law",
      },
    ],
});

export const Law = mongoose.model("Law", lawSchema);
