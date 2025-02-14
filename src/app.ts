import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import httpStatus from "http-status";
import cookieParser from "cookie-parser";
import { appointmentService } from "./app/modules/Appointment/appointment.service";
import cron from "node-cron";

const app = express();
app.use(cors({ origin: "http://localhost:3001", credentials: true }));

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

cron.schedule("* * * * *", () => {
  try {
    appointmentService.cancelUnpaidAppointments();
  } catch (error) {
    console.error(error);
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "PH Health Care Server...",
  });
});

app.use("/api/v1", router);

// Global Error Handler
app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Api Not Found!",
    error: {
      path: req.originalUrl,
      message: "Your requested path is not found!",
    },
  });
});

export default app;
