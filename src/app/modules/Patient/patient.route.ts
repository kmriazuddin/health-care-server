import express from "express";
import { patientController } from "./patient.controller";

const router = express.Router();

router.get("/", patientController.getAllFromDB);

router.get("/:id", patientController.getAllFromDB);

router.patch("/:id", patientController.updateIntoDB);

export const patientRoute = router;
