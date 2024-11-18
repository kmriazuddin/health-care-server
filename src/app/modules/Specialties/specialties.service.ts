import { Request } from "express";
import { fileUpload } from "../../../helpers/fileUpload";
import prisma from "../../../shared/prisma";
import { IFile } from "../../interfaces/file";
import { Specialties } from "@prisma/client";

const insertIntoDB = async (req: Request) => {
  const file = req.file as IFile;
  if (file) {
    const uploadToCloudinary = await fileUpload.uploadToCloudinary(file);
    req.body.icon = uploadToCloudinary?.secure_url;
  }

  const result = await prisma.specialties.create({
    data: req.body,
  });

  return result;
};

const getAllSpecialties = async () => {
  return await prisma.specialties.findMany();
};

const deleteSpecialtiesFromDB = async (id: string): Promise<Specialties> => {
  const result = await prisma.specialties.delete({
    where: {
      id,
    },
  });
  return result;
};

export const specialtiesService = {
  insertIntoDB,
  getAllSpecialties,
  deleteSpecialtiesFromDB,
};
