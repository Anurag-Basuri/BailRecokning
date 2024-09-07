import mongoose, { Schema } from "mongoose";

const judgeSchema = new mongoose.Schema({
  judgeId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  accused: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // idProof: {
  //   type: String,
  //   required: true,
  // },
});

export const Judge = mongoose.model("Judge", judgeSchema);
