import { Charges } from "../models/charges.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addCharges = asyncHandler(async (req, res) => {
  const { accused, charge } = req.body;

  if (!(accused && charge)) {
    throw new ApiError(400, "all fields are required");
  }

  const charges = await Charges.create({ accused, charge });

  if (!charges) {
    throw new ApiError(500, "something went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, charges, "added charge successfully"));
});

const removeCharges = asyncHandler(async (req, res) => {
  const { chargeId } = req.params;

  if (!accused) {
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
    .json(new ApiResponse(200, charges, "removed charge successfully"));
});

export { addCharges, removeCharges };
