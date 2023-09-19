-- CreateTable
CREATE TABLE "Investor" (
    "id" TEXT NOT NULL,
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
    "Image" TEXT NOT NULL,

    CONSTRAINT "InvestorInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Investor_email_key" ON "Investor"("email");

-- AddForeignKey
ALTER TABLE "InvestorInfo" ADD CONSTRAINT "InvestorInfo_id_fkey" FOREIGN KEY ("id") REFERENCES "Investor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
