import { Timeline } from "../models/timeline.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import mongoose from "mongoose";

const addtimeline = asyncHandler(async (req, res) => {
  const { bailId } = req.params;
  const { title } = req.body;

  if (!title || !bailId) {
    throw new ApiError(400, "all fields are required");
  }

  const timeline = await Timeline.create({ bailId, title });

  if (!timeline) {
    throw new ApiError(500, "something went wrong");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { timeline },
        "suucessfully added message to the timeline"
      )
    );
});
const getAllWithBailId = asyncHandler(async (req, res) => {
  const { bailId } = req.params;

  if (!bailId) {
    throw new ApiError(400, "all fields are required");
  }

  const timeline = await Timeline.aggregate([
    {
      $match: {
        bailId: new mongoose.Types.ObjectId(bailId),
      }
    },
  ]);

  if (!timeline) {
    throw new ApiError(500, "something went wrong");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { timeline },
        "suucessfully fetched all the bail timeline"
      )
    );
});

export { addtimeline, getAllWithBailId };
