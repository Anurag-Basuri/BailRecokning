import mongoose, { Schema } from "mongoose";

const languageSchema = new mongoose.Schema({
  lawyerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
});

export const Language = mongoose.model("Language", languageSchema);
