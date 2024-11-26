import express from "express";
import { appointmentController } from "./appointment.controller";
import auth from "../../middleware/auth";
import { UserRole } from "@prisma/client";
import validateRequest from "../../middleware/validateRequest";
import { appointmentValidation } from "./appointment.validation";

const router = express.Router();

router.get(
  "/my-appointment",
  auth(UserRole.PATIENT, UserRole.DOCTOR),
  appointmentController.getMyAppointment
);

router.get(
  "/",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  appointmentController.getAllFromDB
);

router.post(
  "/",
  auth(UserRole.PATIENT),
  validateRequest(appointmentValidation.createAppointment),
  appointmentController.createAppointment
);

router.patch(
  "/status/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.DOCTOR),
  appointmentController.changeAppointmentStatus
);

export const appointmentRoute = router;
