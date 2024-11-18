import express from "express";
import { doctorController } from "./doctor.controller";
import auth from "../../middleware/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.get("/", doctorController.getAllDoctorFromDB);

router.get("/:id", doctorController.getAllDoctorFromDB);

router.patch(
  "/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  doctorController.updateIntoDB
);

router.delete(
  "/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  doctorController.deleteFromDB
);

router.delete(
  "/soft/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  doctorController.softDelete
);

export const doctorRoute = router;
