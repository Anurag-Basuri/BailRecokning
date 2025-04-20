import mongoose from "mongoose";

const judgeProfileSchema = new mongoose.Schema(
  {
    judge: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Judge",
      required: true,
      unique: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    specialization: {
      type: String,
      trim: true,
    },
    experience: {
      type: String,
      trim: true,
    },
    education: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const JudgeProfile = mongoose.model("JudgeProfile", judgeProfileSchema);

export default JudgeProfile;
