import { PreviousCase } from "../models/previousCase.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addPreviousCase = asyncHandler(async (req, res) => {
  const { caseId, caseSummary, caseDetail, outcome, penaltyAmount } =
    req.body;

  if (
    [caseId, caseSummary, caseDetail, outcome].some(
      (fields) => fields?.trim() === ""
    )
  ) {
    throw new ApiError(400, "all fields are required");
  }

  // const chargesArr = JSON.parse(charges);
  // console.log(chargesArr);
  const previous = await PreviousCase.create({
    caseId,
    caseSummary,
    caseDetail,
    outcome,
    penaltyAmount,
    // charges: chargesArr,
  });

  if (!previous) {
    throw new ApiError(500, "somthing went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, previous, "Successfully added case "));
});

const editPreviousCase = asyncHandler(async (req, res) => {
  const { caseSummary, caseDetail, outcome, penaltyAmount } = req.body;
  const { previousCaseId } = req.params;

  if (
    [caseSummary, caseDetail, outcome].some((fields) => fields?.trim() === "")
  ) {
    throw new ApiError(400, "all fields are required");
  }

  const previous = await PreviousCase.findByIdAndUpdate(previousCaseId, {
    caseSummary,
    caseDetail,
    outcome,
    penaltyAmount,
  },{new:true});

  if (!previous) {
    throw new ApiError(500, "somthing went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, previous, "Successfully edited previous case "));
});

const getPreviousCaseById = asyncHandler(async (req, res) => {
  const { previuosCaseId } = req.params;

  if (!previuosCaseId) {
    throw new ApiError(400, "all fields are required");
  }

  const previous = await PreviousCase.findById(previuosCaseId);

  if (!previous) {
    throw new ApiError(500, "somthing went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, previous, "Successfully fetched case "));
});

export { addPreviousCase, editPreviousCase, getPreviousCaseById };
