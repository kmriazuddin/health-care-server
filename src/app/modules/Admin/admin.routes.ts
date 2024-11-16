import express from "express";
import { adminController } from "./admin.controller";
import validateRequest from "../../middleware/validateRequest";
import { adminValidationSchemas } from "./admin.validation";
import auth from "../../middleware/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.get(
  "/",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  adminController.getAllFromDB
);

router.get(
  "/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  adminController.getByIdFromDB
);

router.patch(
  "/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  validateRequest(adminValidationSchemas.update),
  adminController.updateIntoDB
);

router.delete(
  "/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  adminController.deleteFromDB
);

router.delete(
  "/soft/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  adminController.softDeleteFromDB
);

export const adminRoutes = router;
