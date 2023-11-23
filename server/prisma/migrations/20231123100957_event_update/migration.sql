/*
  Warnings:

  - You are about to drop the column `date` on the `Event` table. All the data in the column will be lost.
  - Added the required column `dates` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "date",
ADD COLUMN     "coverImage" TEXT,
ADD COLUMN     "dates" TEXT NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "entryFee" TEXT,
ADD COLUMN     "is_verified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "subtitle" TEXT;
