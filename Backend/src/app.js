import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./db/connection.js";
import securityMiddleware from "./middleware/security.js";
import { loginLimiter, apiLimiter } from "./middleware/rateLimiter.js";
import errorHandler from "./utils/errorHandler.js";
import logger from "./utils/logger.js";

// Import routes
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import caseRoutes from "./routes/case.routes.js";
import bailRoutes from "./routes/bail.routes.js";
import lawyerRoutes from "./routes/lawyer.routes.js";
import judgeRoutes from "./routes/judge.routes.js";
import documentRoutes from "./routes/document.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Connect to MongoDB
connectDB();

// Security middleware
securityMiddleware(app);

// Body parser
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

// Static files
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Rate limiting
app.use("/api/auth/login", loginLimiter);
app.use("/api", apiLimiter);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/cases", caseRoutes);
app.use("/api/bails", bailRoutes);
app.use("/api/lawyers", lawyerRoutes);
app.use("/api/judges", judgeRoutes);
app.use("/api/documents", documentRoutes);

// Error handling
app.use(errorHandler);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
