import { PrismaClient, UserRole } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { fileUpload } from "../../../helpers/fileUpload";
import { IFile } from "../../interfaces/file";

const prisma = new PrismaClient();

const createAdmin = async (req: any) => {
  const file: IFile = req.file;
  if (file) {
    const uploadToCloudinary = await fileUpload.uploadToCloudinary(file);
    req.body.admin.profilePhoto = uploadToCloudinary?.secure_url;
  }

  // // Hash Password
  const hashedPassword: string = await bcrypt.hash(req.body.password, 12);

  const userData = {
    email: req.body.admin.email,
    password: hashedPassword,
    role: UserRole.ADMIN,
  };

  const result = await prisma.$transaction(async (transactionClient) => {
    await transactionClient.user.create({
      data: userData,
    });

    const createAdminData = await transactionClient.admin.create({
      data: req.body.admin,
    });

    return createAdminData;
  });

  return result;
};

export const userService = {
  createAdmin,
};
