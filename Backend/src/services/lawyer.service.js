import { ApiError } from "../utils/errorHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Lawyer from "../models/lawyer.models.js";
import LawyerProfile from "../models/lawyerProfile.models.js";
import Case from "../models/case.models.js";
import Bail from "../models/bail.models.js";

export const getLawyer = async (req, res) => {
  const lawyerId = req.params.id;

  const lawyer = await Lawyer.findById(lawyerId)
    .populate("profile")
    .select("-password");

  if (!lawyer) {
    throw new ApiError(404, "Lawyer not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, lawyer, "Lawyer retrieved successfully"));
};

export const updateLawyer = async (req, res) => {
  const lawyerId = req.params.id;
  const updates = req.body;

  const updatedLawyer = await Lawyer.findByIdAndUpdate(
    lawyerId,
    { $set: updates },
    { new: true }
  )
    .populate("profile")
    .select("-password");

  if (!updatedLawyer) {
    throw new ApiError(404, "Lawyer not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedLawyer, "Lawyer updated successfully"));
};

export const listLawyers = async (req, res) => {
  const { page = 1, limit = 10, search } = req.query;

  const query = {};
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
    ];
  }

  const lawyers = await Lawyer.find(query)
    .populate("profile")
    .select("-password")
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);

  const total = await Lawyer.countDocuments(query);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        lawyers,
        total,
        page: parseInt(page),
        pages: Math.ceil(total / limit),
      },
      "Lawyers retrieved successfully"
    )
  );
};

export const getLawyerCases = async (req, res) => {
  const lawyerId = req.params.id;

  const cases = await Case.find({ lawyer: lawyerId })
    .populate("judge", "name email")
    .sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, cases, "Lawyer cases retrieved successfully"));
};

export const getLawyerBails = async (req, res) => {
  const lawyerId = req.params.id;

  const bails = await Bail.find({ "case.lawyer": lawyerId })
    .populate("case", "title description")
    .sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, bails, "Lawyer bails retrieved successfully"));
};

export const updateLawyerProfile = async (req, res) => {
  const lawyerId = req.params.id;
  const { bio, specialization, experience, education } = req.body;
  const photo = req.file?.path;

  const profileData = {
    bio,
    specialization,
    experience,
    education,
    ...(photo && { photo }),
  };

  const updatedProfile = await LawyerProfile.findOneAndUpdate(
    { lawyer: lawyerId },
    { $set: profileData },
    { new: true, upsert: true }
  );

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        updatedProfile,
        "Lawyer profile updated successfully"
      )
    );
};
