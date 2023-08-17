-- CreateTable
CREATE TABLE "Startup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "business_name" TEXT NOT NULL,
    "business_category" TEXT NOT NULL,
    "registration_type" TEXT NOT NULL,
    "product_or_service" TEXT NOT NULL,
    "inc_no" TEXT,
    "company_website" TEXT,
    "pan_no" TEXT,
    "gst_no" TEXT,
    "itr_per_year" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Startup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Startup_email_key" ON "Startup"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Startup_inc_no_key" ON "Startup"("inc_no");

-- CreateIndex
CREATE UNIQUE INDEX "Startup_pan_no_key" ON "Startup"("pan_no");

-- CreateIndex
CREATE UNIQUE INDEX "Startup_gst_no_key" ON "Startup"("gst_no");
