import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { specialtiesService } from "./specialties.service";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await specialtiesService.insertIntoDB(req);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Specialties Created Successfully!",
    data: result,
  });
});

const getAllSpecialties = catchAsync(async (req: Request, res: Response) => {
  const result = await specialtiesService.getAllSpecialties();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Specialties Data Retrieved Successfully!",
    data: result,
  });
});

const deleteSpecialties = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await specialtiesService.deleteSpecialtiesFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Specialties Delete Successfully!",
    data: result,
  });
});

export const specialtiesController = {
  insertIntoDB,
  getAllSpecialties,
  deleteSpecialties,
};
