import { SimilarCase } from "../models/SimilarCase.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addCase = asyncHandler(async (req, res) => {
  const { caseId, caseSummary, caseDetail, outcome, penaltyAmount } = req.body;

  if (
    [caseId, caseSummary, caseDetail, outcome].some(
      (fields) => fields?.trim() === ""
    )
  ) {
    throw new ApiError(400, "all fields are required");
  }

  const similar = await SimilarCase.create({
    caseId,
    caseSummary,
    caseDetail,
    outcome,
    penaltyAmount,
  });

  if (!similar) {
    throw new ApiError(500, "somthing went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, similar, "Successfully added case "));
});

const editCase = asyncHandler(async (req, res) => {
  const { caseSummary, caseDetail, outcome, penaltyAmount } = req.body;
  const { SimilarCaseId} = req.params;

  if (
    [ caseSummary, caseDetail, outcome].some(
      (fields) => fields?.trim() === ""
    )
  ) {
    throw new ApiError(400, "all fields are required");
  }

  const similar = await SimilarCase.findByIdAndUpdate(SimilarCaseId, {
    caseSummary,
    caseDetail,
    outcome,
    penaltyAmount,
  });

  if (!similar) {
    throw new ApiError(500, "somthing went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, similar, "Successfully edited previous case "));
});

const getCaseById = asyncHandler(async (req, res) => {
  const { caseId } = req.params;

  if (!caseId) {
    throw new ApiError(400, "all fields are required");
  }

  const similar = await SimilarCase.findById(caseId);

  if (!similar) {
    throw new ApiError(500, "somthing went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, similar, "Successfully fetched case "));
});


export { addCase, getCaseById, editCase };
