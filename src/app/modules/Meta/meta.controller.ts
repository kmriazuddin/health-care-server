import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { metaService } from "./meta.service";
import { IAuthUser } from "../../interfaces/common";

const fetchDashboardMetaData = catchAsync(
  async (req: Request & {user?: IAuthUser}, res: Response) => {
    const user = req.user;
    const result = await metaService.fetchDashboardMetaData(user as IAuthUser);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Meta Data Retrieval Successfully",
      data: result,
    });
  }
);

export const metaController = {
  fetchDashboardMetaData,
};
