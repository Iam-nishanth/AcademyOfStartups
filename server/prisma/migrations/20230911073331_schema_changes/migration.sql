/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `RefreshToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Startup` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userEmail]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userEmail` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- DropForeignKey
ALTER TABLE "RefreshToken" DROP CONSTRAINT "RefreshToken_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Startup" DROP CONSTRAINT "Startup_business_email_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ADD COLUMN     "userEmail" TEXT NOT NULL;

-- DropTable
DROP TABLE "RefreshToken";

-- DropTable
DROP TABLE "Startup";

-- CreateTable
CREATE TABLE "Business" (
    "business_id" TEXT NOT NULL,
    "businessEmail" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "business_name" TEXT NOT NULL,
    "business_category" TEXT NOT NULL,
    "registration_type" TEXT NOT NULL,
    "product_or_service" TEXT NOT NULL,
    "inc_no" TEXT,
    "company_website" TEXT,
    "pan_no" TEXT,
    "gst_no" TEXT,
    "itr_per_year" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Business_pkey" PRIMARY KEY ("business_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Business_businessEmail_key" ON "Business"("businessEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Business_inc_no_key" ON "Business"("inc_no");

-- CreateIndex
CREATE UNIQUE INDEX "Business_pan_no_key" ON "Business"("pan_no");

-- CreateIndex
CREATE UNIQUE INDEX "Business_gst_no_key" ON "Business"("gst_no");

-- CreateIndex
CREATE UNIQUE INDEX "User_userEmail_key" ON "User"("userEmail");

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_businessEmail_fkey" FOREIGN KEY ("businessEmail") REFERENCES "User"("userEmail") ON DELETE RESTRICT ON UPDATE CASCADE;
