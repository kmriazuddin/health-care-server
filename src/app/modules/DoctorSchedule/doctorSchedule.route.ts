import express from "express";
import { doctorScheduleController } from "./doctorSchedule.controller";
import auth from "../../middleware/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.post("/", auth(UserRole.DOCTOR), doctorScheduleController.insertIntoDB);

export const doctorScheduleRoute = router;
