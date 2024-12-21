import express from "express";
import { reviewController } from "./review.controller";
import auth from "../../middleware/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.get("/", reviewController.getAllFromDB);

router.post("/", auth(UserRole.PATIENT), reviewController.review);

export const reviewRoute = router;
