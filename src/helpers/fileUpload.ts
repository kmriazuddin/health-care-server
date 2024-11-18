import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import path from "path";
import fs from "fs";
import { ICloudinaryResponse, IFile } from "../app/interfaces/file";
import config from "../config";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "/uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Cloudinary Configuration
cloudinary.config({
  cloud_name: config.cloudinarySecret.cloud_name,
  api_key: config.cloudinarySecret.api_key,
  api_secret: config.cloudinarySecret.api_secret,
});

const uploadToCloudinary = async (
  file: IFile
): Promise<ICloudinaryResponse | undefined> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file.path,
      (error: Error, result: ICloudinaryResponse) => {
        fs.unlinkSync(file.path);
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

export const fileUpload = {
  upload,
  uploadToCloudinary,
};
