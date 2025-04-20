import { ApiError } from "../utils/errorHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Judge from "../models/judge.models.js";
import JudgeProfile from "../models/judgeProfile.models.js";
import Case from "../models/case.models.js";
import Bail from "../models/bail.models.js";

export const getJudge = async (req, res) => {
  const judgeId = req.params.id;

  const judge = await Judge.findById(judgeId)
    .populate("profile")
    .select("-password");

  if (!judge) {
    throw new ApiError(404, "Judge not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, judge, "Judge retrieved successfully"));
};

export const updateJudge = async (req, res) => {
  const judgeId = req.params.id;
  const updates = req.body;

  const updatedJudge = await Judge.findByIdAndUpdate(
    judgeId,
    { $set: updates },
    { new: true }
  )
    .populate("profile")
    .select("-password");

  if (!updatedJudge) {
    throw new ApiError(404, "Judge not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedJudge, "Judge updated successfully"));
};

export const listJudges = async (req, res) => {
  const { page = 1, limit = 10, search } = req.query;

  const query = {};
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
    ];
  }

  const judges = await Judge.find(query)
    .populate("profile")
    .select("-password")
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);

  const total = await Judge.countDocuments(query);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        judges,
        total,
        page: parseInt(page),
        pages: Math.ceil(total / limit),
      },
      "Judges retrieved successfully"
    )
  );
};

export const getJudgeCases = async (req, res) => {
  const judgeId = req.params.id;

  const cases = await Case.find({ judge: judgeId })
    .populate("lawyer", "name email")
    .sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, cases, "Judge cases retrieved successfully"));
};

export const getJudgeBails = async (req, res) => {
  const judgeId = req.params.id;

  const bails = await Bail.find({ "case.judge": judgeId })
    .populate("case", "title description")
    .sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, bails, "Judge bails retrieved successfully"));
};

export const updateJudgeProfile = async (req, res) => {
  const judgeId = req.params.id;
  const { bio, specialization, experience, education } = req.body;
  const photo = req.file?.path;

  const profileData = {
    bio,
    specialization,
    experience,
    education,
    ...(photo && { photo }),
  };

  const updatedProfile = await JudgeProfile.findOneAndUpdate(
    { judge: judgeId },
    { $set: profileData },
    { new: true, upsert: true }
  );

  return res
    .status(200)
    .json(
      new ApiResponse(200, updatedProfile, "Judge profile updated successfully")
    );
};
