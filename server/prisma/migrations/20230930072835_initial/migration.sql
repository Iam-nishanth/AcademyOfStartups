-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'INVESTOR');

-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "userEmail" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Business" (
    "business_id" TEXT NOT NULL,
    "businessEmail" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
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

-- CreateTable
CREATE TABLE "Investor" (
    "id" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'INVESTOR',
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Investor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvestorInfo" (
    "id" TEXT NOT NULL,
    "PhoneNo" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "Image" TEXT,
    "InvestorType" TEXT NOT NULL,
    "InvestmentRange" TEXT NOT NULL,
    "DomainsOfInterest" TEXT[],
    "ExistingInvestments" TEXT,

    CONSTRAINT "InvestorInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "event_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("event_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userEmail_key" ON "User"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Business_businessEmail_key" ON "Business"("businessEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Business_inc_no_key" ON "Business"("inc_no");

-- CreateIndex
CREATE UNIQUE INDEX "Business_pan_no_key" ON "Business"("pan_no");

-- CreateIndex
CREATE UNIQUE INDEX "Business_gst_no_key" ON "Business"("gst_no");

-- CreateIndex
CREATE UNIQUE INDEX "Investor_email_key" ON "Investor"("email");

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_businessEmail_fkey" FOREIGN KEY ("businessEmail") REFERENCES "User"("userEmail") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvestorInfo" ADD CONSTRAINT "InvestorInfo_id_fkey" FOREIGN KEY ("id") REFERENCES "Investor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
