import express from "express";
import { patientController } from "./patient.controller";

const router = express.Router();

router.get("/", patientController.getAllFromDB);

router.get("/:id", patientController.getAllFromDB);

router.patch("/:id", patientController.updateIntoDB);

router.delete("/:id", patientController.deleteFromDB);

router.delete("/soft/:id", patientController.softDelete);

export const patientRoute = router;
