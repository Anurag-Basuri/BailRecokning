import mongoose, { Schema } from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    filePath: {
      type: String,
      required: true,
    },
    case: {
      type: Schema.Types.ObjectId,
      ref: "Case",
    },
    bail: {
      type: Schema.Types.ObjectId,
      ref: "Bail",
    },
    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Document = mongoose.model("Document", documentSchema);

export default Document;
