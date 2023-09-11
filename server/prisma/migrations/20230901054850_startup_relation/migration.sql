-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_email_fkey";

-- AddForeignKey
ALTER TABLE "Startup" ADD CONSTRAINT "Startup_business_email_fkey" FOREIGN KEY ("business_email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
