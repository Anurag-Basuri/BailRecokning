import multer from "multer";
import path from "path";
import { ApiError } from "./errorHandler.js";
import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE } from "../constants.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  const fileType = file.mimetype;
  const allowedTypes = Object.values(ALLOWED_FILE_TYPES).flat();

  if (allowedTypes.includes(fileType)) {
    cb(null, true);
  } else {
    cb(
      new ApiError(
        400,
        "Invalid file type. Only PDF, DOC, DOCX, JPG, PNG, GIF, MP4, and WAV files are allowed."
      ),
      false
    );
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: MAX_FILE_SIZE,
  },
});

export default upload;
