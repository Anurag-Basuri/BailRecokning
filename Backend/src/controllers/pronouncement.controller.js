import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Pronouncement } from "../models/pronouncement.models.js";
import mongoose from "mongoose";

const addAnouncement = asyncHandler(async (req, res) => {
  const { caseId } = req.params;
  const { message } = req.body;

  if (!(caseId && message)) {
    throw new ApiError(400, "All field are required");
  }

  const pronouncement = await Pronouncement.create({ caseId, message });

  if (!pronouncement) {
    throw new ApiError(500, "Something went wrong");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, pronouncement, "Pronouncement added to the case")
    );
});

const editAnouncement = asyncHandler(async (req, res) => {
  const { pronouncementId } = req.params;

  if (!pronouncementId) {
    throw new ApiError(400, "All fields are required");
  }

  const pronouncement = await Pronouncement.findByIdAndUpdate(
    pronouncementId,
    { message },
    { new: true }
  );

  if (!pronouncement) {
    throw new ApiError(500, "Something went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, charges, "Successfully edited Pronouncement"));
});

const getAllAnouncement = asyncHandler(async (req, res) => {
  const { caseId } = req.params;

  if (!caseId) {
    throw new ApiError(400, "All fields are required");
  }
  const pronouncement = await Pronouncement.aggregate([
    {
      $match: {
        caseId: new mongoose.Types.ObjectId(caseId),
      },
    },
  ]);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        pronouncement,
        "Successfully fetched all pronouncement"
      )
    );
});

export { addAnouncement, editAnouncement ,getAllAnouncement };
