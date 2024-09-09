import { Bail } from "../models/bail.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import mongoose from "mongoose";

const addBail = asyncHandler(async (req, res) => {
  const bail = await Bail.create({
    accused: req.user._id,
  });

  if (!bail) {
    throw new ApiError(500, "something went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, bail, "successfully created bail "));
});

const deleteBail = asyncHandler(async (req, res) => {
  const { bailId } = req.params;

  if (!bailId) {
    throw new ApiError(400, "id is required");
  }

  const bail = await Bail.deleteOne({
    _id: bailId,
  });

  if (!bail) {
    throw new ApiError(500, "something went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, bail, "successfully deleted bail "));
});

// const updateBail = asyncHandler(async(req,res)=>{

// })

const getBail = asyncHandler(async (req, res) => {
  const { bailId } = req.params;

  if (!bailId) {
    throw new ApiError(400, "id is required");
  }

  const bail = await Bail.findById(bailId);

  if (!bail) {
    throw new ApiError(404, "not found or incorrect id");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, bail, "successfully feched bail info"));
});

const getAllUserBail = asyncHandler(async (req, res) => {
  const bail = await Bail.aggregate([
    {
      $match: {
        accused: new mongoose.Types.ObjectId(req.user._id),
      },
    },
  ]);

  if (!bail) {
    throw new ApiError(404, "not found or incorrect id");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, { bail }, "successfully feched all user bails ")
    );
});

const getAllBail = asyncHandler(async (req, res) => {
  const bail = await Bail.find({}, { bailStatus: 1 });

  if (!bail) {
    throw new ApiError(404, "not found or incorrect id");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { bail }, "successfully feched all bails "));
});

const getBailByStatus = asyncHandler(async (req, res) => {
  const { bailStatus } = req.params;

  const bail = await Bail.aggregate([
    {
      $match: {
        bailStatus,
      },
    },
    {
      $project: {
        // _id: 1,
        bailStatus: 1,
      },
    },
  ]);

  if (!bail) {
    throw new ApiError(404, "Bail not found or incorrect status");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { bail },
        `Successfully fetched all ${bailStatus} bails`
      )
    );
});

export {
  addBail,
  getBail,
  getAllBail,
  getAllUserBail,
  deleteBail,
  getBailByStatus,
};
