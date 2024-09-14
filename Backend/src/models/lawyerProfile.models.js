import mongoose, { Schema } from "mongoose";

const lawyerProfileSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  fullName: {
    type: String,
    required: [true, "Full  Name is required"],
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  refreshToken: {
    type: String,
  },
  dob: {
    type: Date,
  },
  specialization: {
    type: String,
  },
  rating: {
    type: Float,
  },
  license: {
    type: String,
  },
  websiteUrl: {
    type: String,
  },
  address: {
    type: String,
  },
  OperatingHours: {
    type: Object,
    default: { weekdays: "9 AM - 5 PM", weekends: "Closed" },
  },
  //   accreditation: [
  //     {
  //       type: Schema.Types.ObjectId,
  //       ref: "Language",
  //     },
  //   ],
  publications: {
    type: String,
  },
  awards: {
    type: String,
  },
  education: {
    type: String,
  },
  socialMedia: {
    type: String,
  },
  accreditation: {
    type: String,
  },
  experience: {
    type: Number,
  },
  phone: {
    type: Number,
  },
  languages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Language",
    },
  ],
});
