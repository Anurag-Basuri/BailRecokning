import { ApiError } from "../utils/errorHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Case from "../models/case.models.js";
import Timeline from "../models/timeline.models.js";
import { CASE_STATUS } from "../constants.js";

export const createCase = async (req, res) => {
  const { title, description, status, lawyerId, judgeId, charges } = req.body;

  const newCase = await Case.create({
    title,
    description,
    status: status || CASE_STATUS.PENDING,
    lawyer: lawyerId,
    judge: judgeId,
    charges,
    createdBy: req.user._id,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, newCase, "Case created successfully"));
};

export const getCase = async (req, res) => {
  const caseId = req.params.id;

  const foundCase = await Case.findById(caseId)
    .populate("lawyer", "name email")
    .populate("judge", "name email")
    .populate("timeline");

  if (!foundCase) {
    throw new ApiError(404, "Case not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, foundCase, "Case retrieved successfully"));
};

export const updateCase = async (req, res) => {
  const caseId = req.params.id;
  const updates = req.body;

  const updatedCase = await Case.findByIdAndUpdate(
    caseId,
    { $set: updates },
    { new: true }
  )
    .populate("lawyer", "name email")
    .populate("judge", "name email")
    .populate("timeline");

  if (!updatedCase) {
    throw new ApiError(404, "Case not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedCase, "Case updated successfully"));
};

export const deleteCase = async (req, res) => {
  const caseId = req.params.id;

  const deletedCase = await Case.findByIdAndDelete(caseId);

  if (!deletedCase) {
    throw new ApiError(404, "Case not found");
  }

  // Delete associated timeline events
  await Timeline.deleteMany({ case: caseId });

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Case deleted successfully"));
};

export const listCases = async (req, res) => {
  const { status, lawyer, judge, page = 1, limit = 10 } = req.query;

  const query = {};
  if (status) query.status = status;
  if (lawyer) query.lawyer = lawyer;
  if (judge) query.judge = judge;

  const cases = await Case.find(query)
    .populate("lawyer", "name email")
    .populate("judge", "name email")
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);

  const total = await Case.countDocuments(query);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        cases,
        total,
        page: parseInt(page),
        pages: Math.ceil(total / limit),
      },
      "Cases retrieved successfully"
    )
  );
};

export const addTimelineEvent = async (req, res) => {
  const caseId = req.params.id;
  const { date, description, type } = req.body;
  const documents = req.files?.map((file) => file.path) || [];

  const timelineEvent = await Timeline.create({
    case: caseId,
    date,
    description,
    type,
    documents,
    createdBy: req.user._id,
  });

  return res
    .status(201)
    .json(
      new ApiResponse(201, timelineEvent, "Timeline event added successfully")
    );
};

export const updateTimelineEvent = async (req, res) => {
  const { eventId } = req.params;
  const updates = req.body;
  const newDocuments = req.files?.map((file) => file.path) || [];

  if (newDocuments.length > 0) {
    updates.documents = [...(updates.documents || []), ...newDocuments];
  }

  const updatedEvent = await Timeline.findByIdAndUpdate(
    eventId,
    { $set: updates },
    { new: true }
  );

  if (!updatedEvent) {
    throw new ApiError(404, "Timeline event not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, updatedEvent, "Timeline event updated successfully")
    );
};

export const deleteTimelineEvent = async (req, res) => {
  const { eventId } = req.params;

  const deletedEvent = await Timeline.findByIdAndDelete(eventId);

  if (!deletedEvent) {
    throw new ApiError(404, "Timeline event not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Timeline event deleted successfully"));
};
