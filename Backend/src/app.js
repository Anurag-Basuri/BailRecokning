import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

// Security middleware
app.use(helmet());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again later",
  })
);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";
import lawRouter from "./routes/law.routes.js";
import bailRouter from "./routes/bail.routes.js";
import chargesRouter from "./routes/charges.routes.js";
import lawyerRouter from "./routes/lawyer.routes.js";
import judgeRouter from "./routes/judge.routes.js";
import pronouncementRouter from "./routes/pronouncement.routes.js";
import similarRouter from "./routes/similarCase.routes.js";
import previousRouter from "./routes/previousCase.routes.js";
import lawyerProfileRouter from "./routes/lawyerProfile.routes.js";
import timelineRouter from "./routes/timeline.routes.js";

// routes declaration
app.use("/api/v1/user", userRouter);
app.use("/api/v1/law", lawRouter); // only for admin but now anyone can use it - update in future
app.use("/api/v1/bail", bailRouter);
app.use("/api/v1/charge", chargesRouter);
app.use("/api/v1/lawyer", lawyerRouter);
app.use("/api/v1/judge", judgeRouter);
app.use("/api/v1/pronouncement", pronouncementRouter);
app.use("/api/v1/similar", similarRouter);
app.use("/api/v1/previous", previousRouter);
app.use("/api/v1/profile", lawyerProfileRouter);
app.use("/api/v1/timeline", timelineRouter);

// Error handling middleware
app.use(errorHandler);

export { app };
