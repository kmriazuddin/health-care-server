/*
  Warnings:

  - You are about to drop the column `tatle` on the `specialties` table. All the data in the column will be lost.
  - Added the required column `title` to the `specialties` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "specialties" DROP COLUMN "tatle",
ADD COLUMN     "title" TEXT NOT NULL;
