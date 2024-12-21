import express from "express";
import { prescriptionController } from "./prescription.controller";
import auth from "../../middleware/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.get(
  "/my-prescription",
  auth(UserRole.PATIENT),
  prescriptionController.patientPrescription
);

router.post("/", auth(UserRole.DOCTOR), prescriptionController.insertIntoDB);

export const prescriptionRoute = router;
