class ApiError extends Error {
  constructor(statusCode, message, errors = [], stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

const errorHandler = (err, req, res, next) => {
  let error = err;

  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((val) => val.message);
    error = new ApiError(400, "Validation Error", errors);
  }

  // Handle Mongoose duplicate key errors
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    error = new ApiError(400, `Duplicate ${field} value`);
  }

  // Handle Mongoose cast errors
  if (err.name === "CastError") {
    error = new ApiError(400, `Invalid ${err.path}: ${err.value}`);
  }

  // Handle JWT errors
  if (err.name === "JsonWebTokenError") {
    error = new ApiError(401, "Invalid token");
  }

  if (err.name === "TokenExpiredError") {
    error = new ApiError(401, "Token expired");
  }

  // Default error response
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
    errors: error.errors || [],
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });
};

export { ApiError, errorHandler };
