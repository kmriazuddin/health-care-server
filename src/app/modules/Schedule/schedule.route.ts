import express from "express";
import { scheduleController } from "./schedule.controller";
import auth from "../../middleware/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.post(
  "/",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  scheduleController.insertIntoDB
);

export const scheduleRoute = router;
