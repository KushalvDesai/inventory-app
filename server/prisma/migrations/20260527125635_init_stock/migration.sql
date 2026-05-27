-- CreateTable
CREATE TABLE "Stock" (
    "id" TEXT NOT NULL,
    "inv" TEXT,
    "invNo" TEXT,
    "grade" TEXT,
    "totalBags" INTEGER,
    "bagWt" DOUBLE PRECISION,
    "netWt" DOUBLE PRECISION,
    "dop" TIMESTAMP(3),
    "broker" TEXT,
    "buyer" TEXT,
    "soldDate" TIMESTAMP(3),
    "soldRate" DOUBLE PRECISION,
    "billNo" TEXT,
    "biltyNo" TEXT,
    "purchaseSample" TEXT,
    "purchaseSampleDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StockMaster" (
    "id" TEXT NOT NULL,
    "inv" TEXT,
    "invNo" TEXT,
    "grade" TEXT,
    "totalBags" INTEGER,
    "bagWt" DOUBLE PRECISION,
    "netWt" DOUBLE PRECISION,
    "dop" TIMESTAMP(3),
    "broker" TEXT,
    "buyer" TEXT,
    "soldDate" TIMESTAMP(3),
    "soldRate" DOUBLE PRECISION,
    "billNo" TEXT,
    "biltyNo" TEXT,
    "purchaseSample" TEXT,
    "purchaseSampleDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StockMaster_pkey" PRIMARY KEY ("id")
);
