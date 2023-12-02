import express from "express";
import { config } from "dotenv";
import courseRouter from "./Routes/CourseRoutes.js";
import userRouter from "./Routes/UserRoutes.js";
import { ErrorMiddleware } from "./Middleware/ErrorMiddleware.js";
import cookieParser from "cookie-parser";

config({
  path: "./Config/config.env",
});

const app = express();
// Using Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: "true",
  })
);
app.use(cookieParser());

/** Course Routes */
app.use("/api/v1", courseRouter);
/** User Routes */
app.use("/api/v1", userRouter);

export default app;

app.use(ErrorMiddleware);
