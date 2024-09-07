import { Judge } from "../models/judge.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addJudge = asyncHandler(async (req, res) => { // who can add the judge here user can change
  const { judgeId } = req.params;

  if (!judgeId) {
    throw new ApiError(400, "all field are required");
  }

  const judge = await Judge.create({ judgeId, accused: req.user?._id });

  if (!judge) {
    throw new ApiError(500, "something went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, judge, "Added judge to the case"));
});

const removeJudge = asyncHandler(async (req, res) => { // who can remove the judge think , now user 
  const { judgeId } = req.params;

  if (!judgeId) {
    throw new ApiError(400, "all fields are required");
  }

  const filter = {
    $and: [
      { judgeId },
      { accused: req.user?._id }
    ]
  };

  const judge = await Judge.deleteOne(filter);

  if (!judge) {
    throw new ApiError(500, "something went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, judge, "removed Judge successfully"));
});

export { addJudge,removeJudge };
