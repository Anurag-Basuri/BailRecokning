import { ApiError } from "../utils/errorHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Bail from "../models/bail.models.js";
import { BAIL_STATUS } from "../constants.js";

export const createBail = async (req, res) => {
  const { caseId, amount, conditions, status, documents } = req.body;

  const newBail = await Bail.create({
    case: caseId,
    amount,
    conditions,
    status: status || BAIL_STATUS.PENDING,
    documents,
    createdBy: req.user._id,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, newBail, "Bail created successfully"));
};

export const getBail = async (req, res) => {
  const bailId = req.params.id;

  const foundBail = await Bail.findById(bailId)
    .populate("case", "title description")
    .populate("createdBy", "name email");

  if (!foundBail) {
    throw new ApiError(404, "Bail not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, foundBail, "Bail retrieved successfully"));
};

export const updateBail = async (req, res) => {
  const bailId = req.params.id;
  const updates = req.body;

  const updatedBail = await Bail.findByIdAndUpdate(
    bailId,
    { $set: updates },
    { new: true }
  )
    .populate("case", "title description")
    .populate("createdBy", "name email");

  if (!updatedBail) {
    throw new ApiError(404, "Bail not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedBail, "Bail updated successfully"));
};

export const deleteBail = async (req, res) => {
  const bailId = req.params.id;

  const deletedBail = await Bail.findByIdAndDelete(bailId);

  if (!deletedBail) {
    throw new ApiError(404, "Bail not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Bail deleted successfully"));
};

export const listBails = async (req, res) => {
  const { status, caseId, page = 1, limit = 10 } = req.query;

  const query = {};
  if (status) query.status = status;
  if (caseId) query.case = caseId;

  const bails = await Bail.find(query)
    .populate("case", "title description")
    .populate("createdBy", "name email")
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);

  const total = await Bail.countDocuments(query);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        bails,
        total,
        page: parseInt(page),
        pages: Math.ceil(total / limit),
      },
      "Bails retrieved successfully"
    )
  );
};

export const addBailDocument = async (req, res) => {
  const bailId = req.params.id;
  const documents = req.files?.map((file) => file.path) || [];

  const updatedBail = await Bail.findByIdAndUpdate(
    bailId,
    { $push: { documents: { $each: documents } } },
    { new: true }
  );

  if (!updatedBail) {
    throw new ApiError(404, "Bail not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedBail, "Documents added successfully"));
};

export const removeBailDocument = async (req, res) => {
  const { documentId } = req.params;

  const updatedBail = await Bail.findOneAndUpdate(
    { documents: documentId },
    { $pull: { documents: documentId } },
    { new: true }
  );

  if (!updatedBail) {
    throw new ApiError(404, "Document not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedBail, "Document removed successfully"));
};
