import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

const addCase = asyncHandler(async (req, res) => {
  const { caseId, caseSummary, caseDetail, outcome } = req.body;

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
  });

  if (!similar) {
    throw new ApiError(500, "somthing went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, similar, "Successfully added case "));
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


export { addCase, getCaseById };
