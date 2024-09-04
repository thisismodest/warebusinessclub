/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
ADD COLUMN     "businessEmail" TEXT,
ADD COLUMN     "businessLoc" TEXT,
ADD COLUMN     "businessMap" TEXT,
ADD COLUMN     "businessName" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "socials" JSONB,
ADD COLUMN     "website" TEXT;
