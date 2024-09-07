import { Law } from "../models/law.models.js";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

const getLaw = asyncHandler(async (req, res) => {
  const { lawId } = req.body;

  if (!lawId) {
    throw new ApiError(400, "all fields are required");
  }

  const law = await Law.findById(lawId);

  if (!law) {
    throw new ApiError(404, "not found or invalid id");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, law, "Successfully feched the law"));
});

const addlaw = asyncHandler(async (req, res) => {
  const { lawName, sectionTitle,sectionDesc } = req.body;

  // ,chapter,explanation,exception,illustration,punishment,penaltyDescription,congnisable,bailable,triableByCourt,compoundable,fineAmount,maxImprisonment

  if (
    [lawName,sectionTitle,sectionDesc].some(
      (fields) => fields?.trim() === ""
    )
  ) {
    throw new ApiError(400, "all fields are required");
  }

  const law = await Law.create({lawName,sectionTitle,sectionDesc})

  if (!law) {
    throw new ApiError(500, "somthing went wrong");
  }

  return res.status(200).json(new ApiResponse(200,law,"Successfully added the Law"))
});

// const editLaw

// const findlaw

export { getLaw, addlaw };
