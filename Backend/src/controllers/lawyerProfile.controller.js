import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { LawyerProfile } from "../models/lawyerProfile.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";

const addDetails = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const profile = await LawyerProfile.create({
    userId,
  });
  if (!profile) {
    throw new ApiError(500, "Something went wrong");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, { profile }, "Successfully added profile details")
    );
});

const editDetails = asyncHandler(async (req, res) => {
  const { profileId } = req.params;
  const {
    phone,
    experience,
    email,
    address,
    specialization,
    license,
    languages,
    website,
    socialMedia,
    operatingHours,
    accreditation,
    publications,
    education,
    awards,
  } = req.body;

  if (
    [specialization, license, website, address].some(
      (fields) => fields?.trim() === ""
    )
  ) {
    throw new ApiError(400, "all fields are required");
  }

  const profile = await LawyerProfile.findByIdAndUpdate(
    profileId,
    {
      phone,
      experience,
      email,
      address,
      specialization,
      license,
      languages,
      website,
      socialMedia,
      operatingHours,
      accreditation,
      publications,
      awards,
      education,
    },
    { new: true }
  );

  if (!profile) {
    throw new ApiError(500, "Something went wrong");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, { profile }, "Successfully edited profile details")
    );
});

const getProfileById = asyncHandler(async (req, res) => {
  const { profileId } = req.params;

  if (!profileId) {
    throw new ApiError(400, "All fields are required");
  }

  const profile = await LawyerProfile.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(profileId),
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "userInfo",
      },
    },
    {
      $addFields: {
        userInfo: {
          $first: "$userInfo",
        },
      },
    },
    {
      $project: {
        specialization: 1,
        license: 1,
        website: 1,
        address: 1,
        operatingHours: 1,
        publications: 1,
        awards: 1,
        education: 1,
        socialMedia: 1,
        accreditation: 1,
        experience: 1,
        phone: 1,
        languages: 1,
        userInfo: {
          email: 1,
          fullName: 1,
          avatar: 1,
        },
      },
    },
    {
      $limit: 1,
    },
  ]);

  if (!profile) {
    throw new ApiError(500, "Something went wrong");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, { profile }, "Successfully fetched profile details")
    );
});

const getAllLawyers = asyncHandler(async (req, res) => {
  const profile = await LawyerProfile.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "userInfo",
      },
    },
    {
      $addFields: {
        userInfo: {
          $first: "$userInfo",
        },
      },
    },
    {
      $project: {
        specialization: 1,
        license: 1,
        websiteUrl: 1,
        address: 1,
        OperatingHours: 1,
        publications: 1,
        awards: 1,
        education: 1,
        socialMedia: 1,
        accreditation: 1,
        experience: 1,
        phone: 1,
        languages: 1,
        userInfo: {
          email: 1,
          fullName: 1,
          avatar: 1,
        },
      },
    },
  ]);

  if (!profile) {
    throw new ApiError(500, "Something went wrong");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { profile },
        "Successfully fetched all lawyers details"
      )
    );
});

const getProfileByUserId = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const profile = await LawyerProfile.aggregate([
    {
      $match: {
        userId: new mongoose.Types.ObjectId(userId),
      },
    },
  ]);

  if (!profile) {
    throw new ApiError(500, "Something went wrong");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, { profile }, "Successfully fetched lawyer details")
    );
});

export {
  addDetails,
  editDetails,
  getProfileById,
  getAllLawyers,
  getProfileByUserId,
};
