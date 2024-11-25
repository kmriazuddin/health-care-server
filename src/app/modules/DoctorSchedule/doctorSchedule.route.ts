import express from "express";
import { doctorScheduleController } from "./doctorSchedule.controller";
import auth from "../../middleware/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.get(
  "/",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT),
  doctorScheduleController.getAllFromDB
);

router.get(
  "/my-schedule",
  auth(UserRole.DOCTOR),
  doctorScheduleController.getMySchedule
);

router.post("/", auth(UserRole.DOCTOR), doctorScheduleController.insertIntoDB);

router.delete(
  "/:id",
  auth(UserRole.DOCTOR),
  doctorScheduleController.deleteFromDB
);

export const doctorScheduleRoute = router;
