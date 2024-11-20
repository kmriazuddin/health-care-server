/*
  Warnings:

  - You are about to drop the column `immunizatioinStatus` on the `patient_health_datas` table. All the data in the column will be lost.
  - You are about to drop the column `pergnancyStatus` on the `patient_health_datas` table. All the data in the column will be lost.
  - Added the required column `immunizationStatus` to the `patient_health_datas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pregnancyStatus` to the `patient_health_datas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "patient_health_datas" DROP COLUMN "immunizatioinStatus",
DROP COLUMN "pergnancyStatus",
ADD COLUMN     "immunizationStatus" TEXT NOT NULL,
ADD COLUMN     "pregnancyStatus" BOOLEAN NOT NULL;
