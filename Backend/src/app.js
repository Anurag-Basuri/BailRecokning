import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

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


// routes declaration
app.use("/api/v1/user", userRouter);
app.use("/api/v1/law", lawRouter); // only for admin but now anyone can use it - update in future

export { app };
