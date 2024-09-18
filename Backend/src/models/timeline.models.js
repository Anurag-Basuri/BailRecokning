import mongoose, { Schema } from "mongoose";

const timelineSchema = new mongoose.Schema(
  {
    bailId: {
      type: Schema.Types.ObjectId,
      ref: "Bail",
      required: true,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Timeline = mongoose.model("Timeline", timelineSchema);
