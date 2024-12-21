import express from "express";
import { metaController } from "./meta.controller";
import auth from "../../middleware/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.get(
  "/",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT),
  metaController.fetchDashboardMetaData
);

export const metaRoute = router;
