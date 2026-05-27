-- CreateTable
CREATE TABLE "UpdateOtp" (
    "id" TEXT NOT NULL,
    "stockId" TEXT NOT NULL,
    "otp" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UpdateOtp_pkey" PRIMARY KEY ("id")
);
