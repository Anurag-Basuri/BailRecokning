import { ApiError } from "../utils/errorHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Document from "../models/document.models.js";
import Case from "../models/case.models.js";
import Bail from "../models/bail.models.js";

export const uploadDocument = async (req, res) => {
  const { caseId, bailId, type, description } = req.body;
  const file = req.file;

  if (!file) {
    throw new ApiError(400, "No file uploaded");
  }

  let documentData = {
    type,
    description,
    filePath: file.path,
    uploadedBy: req.user._id,
  };

  // If caseId is provided, associate with case
  if (caseId) {
    const caseExists = await Case.findById(caseId);
    if (!caseExists) {
      throw new ApiError(404, "Case not found");
    }
    documentData.case = caseId;
  }

  // If bailId is provided, associate with bail
  if (bailId) {
    const bailExists = await Bail.findById(bailId);
    if (!bailExists) {
      throw new ApiError(404, "Bail not found");
    }
    documentData.bail = bailId;
  }

  const document = await Document.create(documentData);

  return res
    .status(201)
    .json(new ApiResponse(201, document, "Document uploaded successfully"));
};

export const getDocument = async (req, res) => {
  const documentId = req.params.id;

  const document = await Document.findById(documentId)
    .populate("case", "title")
    .populate("bail", "amount")
    .populate("uploadedBy", "name email");

  if (!document) {
    throw new ApiError(404, "Document not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, document, "Document retrieved successfully"));
};

export const updateDocument = async (req, res) => {
  const documentId = req.params.id;
  const { type, description } = req.body;
  const file = req.file;

  const updates = {
    type,
    description,
    ...(file && { filePath: file.path }),
  };

  const updatedDocument = await Document.findByIdAndUpdate(
    documentId,
    { $set: updates },
    { new: true }
  )
    .populate("case", "title")
    .populate("bail", "amount")
    .populate("uploadedBy", "name email");

  if (!updatedDocument) {
    throw new ApiError(404, "Document not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, updatedDocument, "Document updated successfully")
    );
};

export const deleteDocument = async (req, res) => {
  const documentId = req.params.id;

  const deletedDocument = await Document.findByIdAndDelete(documentId);

  if (!deletedDocument) {
    throw new ApiError(404, "Document not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Document deleted successfully"));
};

export const listDocuments = async (req, res) => {
  const { caseId, bailId, type, page = 1, limit = 10 } = req.query;

  const query = {};
  if (caseId) query.case = caseId;
  if (bailId) query.bail = bailId;
  if (type) query.type = type;

  const documents = await Document.find(query)
    .populate("case", "title")
    .populate("bail", "amount")
    .populate("uploadedBy", "name email")
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);

  const total = await Document.countDocuments(query);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        documents,
        total,
        page: parseInt(page),
        pages: Math.ceil(total / limit),
      },
      "Documents retrieved successfully"
    )
  );
};
