import { Lawyer } from "../models/lawyer.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addLawyer = asyncHandler(async (req, res) => {
  const { lawyerId } = req.params;

  if (!lawyerId) {
    throw new ApiError(400, "all field are required");
  }

  const lawyer = await Lawyer.create({ lawyerId, accused: req.user?._id });

  if (!lawyer) {
    throw new ApiError(500, "something went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, lawyer, "Added lawyer to the case"));
});

const removeLawyer = asyncHandler(async (req, res) => { // do test this one , user can remove lawyer
  const { lawyerId } = req.params;

  if (!accused) {
    throw new ApiError(400, "all fields are required");
  }

  const filter = {
    $and: [
      { lawyerId },
      { accused: req.user?._id }
    ]
  };

  const lawyer = await Lawyer.deleteOne(filter);

  if (!lawyer) {
    throw new ApiError(500, "something went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, charges, "removed lawyer successfully"));
});

export { addLawyer,removeLawyer };
