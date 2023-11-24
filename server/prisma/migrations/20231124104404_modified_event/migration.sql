-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "is_paid" BOOLEAN DEFAULT false,
ADD COLUMN     "paymentLink" TEXT;
