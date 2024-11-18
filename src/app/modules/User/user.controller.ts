import { Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { userFilterableFields } from "./user.constant";
import pick from "../../../shared/pick";

const createAdmin = async (req: Request, res: Response) => {
  try {
    const result = await userService.createAdmin(req);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin Created Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.name || "Something Went Wrong!",
      error: error,
    });
  }
};

const createDoctor = async (req: Request, res: Response) => {
  try {
    const result = await userService.createDoctor(req);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Doctor Created Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.name || "Something Went Wrong!",
      error: error,
    });
  }
};

const createPatient = async (req: Request, res: Response) => {
  try {
    const result = await userService.createPatient(req);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Patient Created Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.name || "Something Went Wrong!",
      error: error,
    });
  }
};

const getAllFromDB = catchAsync(async (req, res) => {
  const filters = pick(req.query, userFilterableFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);

  const result = await userService.getAllFromDB(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Data Retrieved Successfully!",
    meta: result.meta,
    data: result.data,
  });
});

const changeProfileStatus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userService.changeProfileStatus(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User profile status change Successfully!",
    data: result,
  });
});

export const userController = {
  createAdmin,
  createDoctor,
  createPatient,
  getAllFromDB,
  changeProfileStatus,
};
