import mongoose,{Schema} from "mongoose";

const bailSchema = new mongoose.Schema(
  {
    accused: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    dateOfArrest: {
      type: Date,
    },
    charges: [
      {
        type: Schema.Types.ObjectId,
        ref: "Law",
      },
    ],
    imprisonmentDuration: {
      // accused has served
      type: Number,
    },
    eligibilityStatus: {
      type: Boolean,
      default: false,
    },
    riskAssessmentScore: {
      type: Number,
      default: 0,
    },
    bailStatus: {
      type: String,
      default: "Pending",
    },
    // judgeComments:{ //can make a new table and this can be an array
    //     type:
    // },
    suretyAmount: {
      type: Number,
    },
    personalBondAmount: {
      type: Number,
    },
    verdict: {
      type: String,
      lowercase: true,
    },
    lawyer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    judge: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Bail = mongoose.model("Bail", bailSchema);
