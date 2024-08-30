/*
  Warnings:

  - You are about to drop the column `weight_lb` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Update` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Update" DROP CONSTRAINT "Update_userID_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "weight_lb",
ALTER COLUMN "height_cm" DROP NOT NULL;

-- DropTable
DROP TABLE "Update";

-- CreateTable
CREATE TABLE "DailyUpdate" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userID" TEXT NOT NULL,
    "musclesSore" "Muscle"[],
    "soreness" INTEGER[],
    "musclesInjury" "Muscle"[],
    "injurySeverity" INTEGER[],
    "weight" INTEGER NOT NULL,

    CONSTRAINT "DailyUpdate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DailyUpdate_userID_createdAt_idx" ON "DailyUpdate"("userID", "createdAt");

-- AddForeignKey
ALTER TABLE "DailyUpdate" ADD CONSTRAINT "DailyUpdate_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
