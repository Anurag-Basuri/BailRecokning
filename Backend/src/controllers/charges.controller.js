import { Charges } from "../models/charges.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import mongoose from "mongoose";

const addCharges = asyncHandler(async (req, res) => {
  const { bailId, charge } = req.body;

  if (!(bailId && charge)) {
    throw new ApiError(400, "all fields are required");
  }

  const charges = await Charges.create({
    accused: req.user._id,
    bailId,
    charge,
  });

  if (!charges) {
    throw new ApiError(500, "something went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, charges, "successfully added charge "));
});

const removeCharges = asyncHandler(async (req, res) => {
  const { chargeId } = req.params;

  if (!chargeId) {
    throw new ApiError(400, "all fields are required");
  }

  const charges = await Charges.deleteOne({
    _id: new mongoose.Types.ObjectId(chargeId),
  });

  if (!charges) {
    throw new ApiError(500, "something went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, charges, "successfully removed charge "));
});

const getallCharges = asyncHandler(async (req, res) => {
  const { bailId } = req.params;

  if (!bailId) {
    throw new ApiError(400, "all fields are required");
  }

  const charges = await Charges.aggregate([
    {
      $match: {
        bailId: new mongoose.Types.ObjectId(bailId),
      },
    },
  ]);

  if (!charges) {
    throw new ApiError(500, "something went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, charges, "successfully fetched all charges "));
});

export { addCharges, removeCharges, getallCharges };
