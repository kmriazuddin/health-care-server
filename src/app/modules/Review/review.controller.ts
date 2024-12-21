import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { IAuthUser } from "../../interfaces/common";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { reviewService } from "./review.service";
import pick from "../../../shared/pick";
import { reviewFilterableFields } from "./review.contant";

const review = catchAsync(
  async (req: Request & { user?: IAuthUser }, res: Response) => {
    const user = req.user;
    const result = await reviewService.review(user as IAuthUser, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Prescription Created Successfully!",
      data: result,
    });
  }
);

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, reviewFilterableFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  const result = await reviewService.getAllFromDB(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Reviews retrieval successfully",
    meta: result.meta,
    data: result.data,
  });
});

export const reviewController = {
  review,
  getAllFromDB,
};
