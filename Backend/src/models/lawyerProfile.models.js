import mongoose, { Schema } from "mongoose";

const lawyerProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    accreditation: {
      type: Array,
    },
    publications: {
      type: Array,
    },
    awards: {
      type: Array,
    },
    education: {
      type: Array,
    },
    languages: {
      type: Array,
    },
    phone: {
      type: Number,
      default: 0,
    },
    experience: {
      type: Number,
      default: 0,
    },
    address: {
      type: String,
      default: "",
    },
    specialization: {
      type: String,
      default: "",
    },
    license: {
      type: String,
      default: "",
    },
    languages: {
      type: Array,
    },
    website: {
      type: String,
      default: "",
    },
    socialMedia: {
      type: Object,
      default: {
        facebook: "",
        x: "",
      },
    },
    operatingHours: {
      type: Object,
      default: {
        weekdays: "",
        weekends: "",
      },
    },
    accreditation: {
      type: Array,
    },
  },
  { new: true }
);

export const LawyerProfile = mongoose.model(
  "LawyerProfile",
  lawyerProfileSchema
);
