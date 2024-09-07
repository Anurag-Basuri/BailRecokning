import mongoose, { Schema } from "mongoose";

const lawyerSchema = new mongoose.Schema({
  lawyerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  accused: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // idProof:{
  //     type:String,
  //     required:true,
  // }
});

export const Lawyer = mongoose.model("Lawyer", lawyerSchema);
