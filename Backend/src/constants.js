export const DB_NAME = "shiipc";

export const USER_ROLES = {
  ADMIN: "admin",
  LAWYER: "lawyer",
  JUDGE: "judge",
  CLERK: "clerk",
  USER: "user",
};

export const CASE_STATUS = {
  PENDING: "pending",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

export const BAIL_STATUS = {
  PENDING: "pending",
  GRANTED: "granted",
  REJECTED: "rejected",
  REVOKED: "revoked",
};

export const FILE_TYPES = {
  DOCUMENT: "document",
  IMAGE: "image",
  VIDEO: "video",
  AUDIO: "audio",
};

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const ALLOWED_FILE_TYPES = {
  DOCUMENT: [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ],
  IMAGE: ["image/jpeg", "image/png", "image/gif"],
  VIDEO: ["video/mp4", "video/quicktime"],
  AUDIO: ["audio/mpeg", "audio/wav"],
};

export const PAGINATION_LIMIT = 10;

export const JWT_EXPIRY = {
  ACCESS_TOKEN: "1d",
  REFRESH_TOKEN: "7d",
};
