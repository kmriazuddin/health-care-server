import express from "express";
import { userRoutes } from "../modules/User/user.routes";
import { adminRoutes } from "../modules/Admin/admin.routes";
import { authRoutes } from "../modules/Auth/auth.route";
import { specialtiesRoutes } from "../modules/Specialties/specialties.route";
import { doctorRoute } from "../modules/Doctor/doctor.route";
import { patientRoute } from "../modules/Patient/patient.route";
import { scheduleRoute } from "../modules/Schedule/schedule.route";
import { doctorScheduleRoute } from "../modules/DoctorSchedule/doctorSchedule.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/admin",
    route: adminRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/specialties",
    route: specialtiesRoutes,
  },
  {
    path: "/doctor",
    route: doctorRoute,
  },
  {
    path: "/patient",
    route: patientRoute,
  },
  {
    path: "/schedule",
    route: scheduleRoute,
  },
  {
    path: "/doctor-schedule",
    route: doctorScheduleRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
