/*
  Warnings:

  - You are about to drop the column `VentureOrIndividual` on the `InvestorInfo` table. All the data in the column will be lost.
  - Added the required column `InvestorType` to the `InvestorInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InvestorInfo" DROP COLUMN "VentureOrIndividual",
ADD COLUMN     "InvestorType" TEXT NOT NULL,
ALTER COLUMN "Image" DROP NOT NULL;
