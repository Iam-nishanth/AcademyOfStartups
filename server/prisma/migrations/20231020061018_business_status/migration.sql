/*
  Warnings:

  - Added the required column `status` to the `Business` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Business" ADD COLUMN     "status" TEXT NOT NULL;
