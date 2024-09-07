import mongoose, { Schema } from "mongoose";

const chargesSchema = new mongoose.Schema(
  {
    accused: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    charge: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Charges = mongoose.model("Charges", chargesSchema);
