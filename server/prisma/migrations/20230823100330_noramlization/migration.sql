/*
  Warnings:

  - The primary key for the `RefreshToken` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `RefreshToken` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `RefreshToken` table. All the data in the column will be lost.
  - The primary key for the `Startup` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `Startup` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Startup` table. All the data in the column will be lost.
  - You are about to drop the column `isVerified` on the `Startup` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[business_email]` on the table `Startup` will be added. If there are existing duplicate values, this will fail.
  - The required column `token_id` was added to the `RefreshToken` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `user_id` to the `RefreshToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `business_email` to the `Startup` table without a default value. This is not possible if the table is not empty.
  - The required column `startup_id` was added to the `Startup` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "RefreshToken" DROP CONSTRAINT "RefreshToken_userId_fkey";

-- DropIndex
DROP INDEX "Startup_email_key";

-- AlterTable
ALTER TABLE "RefreshToken" DROP CONSTRAINT "RefreshToken_pkey",
DROP COLUMN "id",
DROP COLUMN "userId",
ADD COLUMN     "token_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD CONSTRAINT "RefreshToken_pkey" PRIMARY KEY ("token_id");

-- AlterTable
ALTER TABLE "Startup" DROP CONSTRAINT "Startup_pkey",
DROP COLUMN "email",
DROP COLUMN "id",
DROP COLUMN "isVerified",
ADD COLUMN     "business_email" TEXT NOT NULL,
ADD COLUMN     "is_verified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "startup_id" TEXT NOT NULL,
ADD CONSTRAINT "Startup_pkey" PRIMARY KEY ("startup_id");

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Startup_business_email_key" ON "Startup"("business_email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_email_fkey" FOREIGN KEY ("email") REFERENCES "Startup"("business_email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
