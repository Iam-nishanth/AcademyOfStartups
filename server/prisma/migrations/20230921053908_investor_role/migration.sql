-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'INVESTOR';

-- AlterTable
ALTER TABLE "InvestorInfo" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'INVESTOR';
