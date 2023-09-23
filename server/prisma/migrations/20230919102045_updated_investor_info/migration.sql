/*
  Warnings:

  - Added the required column `InvestmentRange` to the `InvestorInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `VentureOrIndividual` to the `InvestorInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InvestorInfo" ADD COLUMN     "DomainsOfInterest" TEXT[],
ADD COLUMN     "ExistingInvestments" TEXT[],
ADD COLUMN     "InvestmentRange" TEXT NOT NULL,
ADD COLUMN     "VentureOrIndividual" TEXT NOT NULL;
