import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { scheduleService } from "./schedule.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await scheduleService.insertIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Schedule Create Successfully!",
    data: result,
  });
});

export const scheduleController = {
  insertIntoDB,
};
