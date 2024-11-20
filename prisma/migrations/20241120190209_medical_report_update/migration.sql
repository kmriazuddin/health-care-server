/*
  Warnings:

  - You are about to drop the column `reportId` on the `medical_reports` table. All the data in the column will be lost.
  - Added the required column `reportName` to the `medical_reports` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "medical_reports" DROP COLUMN "reportId",
ADD COLUMN     "reportName" TEXT NOT NULL;
