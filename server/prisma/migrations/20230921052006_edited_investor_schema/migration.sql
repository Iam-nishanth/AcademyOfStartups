-- AlterTable
ALTER TABLE "InvestorInfo" ALTER COLUMN "ExistingInvestments" DROP NOT NULL,
ALTER COLUMN "ExistingInvestments" SET DATA TYPE TEXT;
