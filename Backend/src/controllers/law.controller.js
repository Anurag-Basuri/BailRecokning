import { Law } from "../models/law.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getLawByID = asyncHandler(async (req, res) => {
  const { lawId } = req.params;

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
  const {
    lawName,
    section,
    sectionTitle,
    sectionDesc,
    chapter,
    explanation,
    exception,
    illustration,
    punishment,
    penaltyDescription,
    congnisable,
    bailable,
    triableByCourt,
    compoundable,
    fineAmount,
    specialCategories,
    maxImprisonment,
  } = req.body;

  // ,chapter,explanation,exception,illustration,punishment,penaltyDescription,congnisable,bailable,triableByCourt,compoundable,fineAmount,maxImprisonment

  if (
    [
      lawName,
      sectionTitle,
      section,
      sectionDesc,
      explanation,
      exception,
      bailable,
      illustration,
      punishment,
      penaltyDescription,
      triableByCourt,
      specialCategories,
    ].some((fields) => fields?.trim() === "")
  ) {
    throw new ApiError(400, "all fields are required");
  }
  const sec = section.toLowerCase();
  const law = await Law.create({
    lawName,
    section: sec,
    sectionTitle,
    sectionDesc,
    chapter,
    explanation,
    exception,
    illustration,
    punishment,
    penaltyDescription,
    congnisable,
    bailable,
    triableByCourt,
    compoundable,
    fineAmount,
    maxImprisonment,
    specialCategories,
  });

  if (!law) {
    throw new ApiError(500, "somthing went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, law, "Successfully added the Law"));
});

const addLaws = asyncHandler(async (req, res) => {
  const { laws } = req.body;

  if (
    laws.some(
      (law) =>
        ![
          "lawName",
          "sectionTitle",
          "sectionDesc",
          "section",
          "explanation",
          "exception",
          "illustration",
          "punishment",
          " specialCategories",
          "penaltyDescription",
          "triableByCourt",
        ].every((field) => law[field]?.trim() !== "")
    )
  ) {
    throw new ApiError(400, "All fields are required for each law");
  }

  const createdLaws = await Law.insertMany(laws);

  if (!createdLaws.length) {
    throw new ApiError(500, "Something went wrong while adding laws");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, createdLaws, "Successfully added the laws"));
});

const getLawBySearch = asyncHandler(async (req, res) => {
  const { section } = req.params;

  if (!section) {
    throw new ApiError(400, "all fields are required");
  }

  const search = section.toLowerCase();
  const law = await Law.aggregate([
    {
      $match: {
        section: search,
      },
    },
  ]);

  if (!law) {
    throw new ApiError(500, "something went wrong");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { law }, "Successfully the required law"));
});

const getLawsBySearch = asyncHandler(async (req, res) => {
  const { sections } = req.body;

  console.log(sections);
  if (!sections || sections.length === 0) {
    throw new ApiError(400, "No sections provided");
  }

  const searchTerms = sections.map((section) => section.toLowerCase());

  const laws = await Law.aggregate([
    {
      $match: {
        section: { $in: searchTerms },
      },
    },
  ]);

  if (laws.length === 0) {
    throw new ApiError(404, "No laws found for the given sections");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, { laws }, "Successfully retrieved the required laws")
    );
});

const getAllLaws = asyncHandler(async (req, res) => {
  const law = await Law.find({});

  if (!law) {
    throw new ApiError(500, "something went wrong");
  }

  return res.status(200).json();
});

export {
  getLawByID,
  addlaw,
  getLawBySearch,
  addLaws,
  getAllLaws,
  getLawsBySearch,
};
