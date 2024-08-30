/*
  Warnings:

  - You are about to drop the column `fatigue` on the `Cardio` table. All the data in the column will be lost.
  - You are about to drop the column `muscleFatigue` on the `Cardio` table. All the data in the column will be lost.
  - You are about to drop the column `musclesInjury` on the `DailyUpdate` table. All the data in the column will be lost.
  - You are about to drop the column `musclesSore` on the `DailyUpdate` table. All the data in the column will be lost.
  - You are about to drop the column `fatigue` on the `Exercise` table. All the data in the column will be lost.
  - You are about to drop the column `muscleFatigue` on the `Exercise` table. All the data in the column will be lost.
  - You are about to drop the column `primary` on the `Exercise` table. All the data in the column will be lost.
  - You are about to drop the column `secondary` on the `Exercise` table. All the data in the column will be lost.
  - You are about to drop the column `finishedAt` on the `LoggedWorkout` table. All the data in the column will be lost.
  - You are about to drop the `PerformedCardio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PerformedExercise` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `overallFatigue` to the `Cardio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `overallFatigue` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primaryMuscleName` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PerformedCardio" DROP CONSTRAINT "PerformedCardio_cardioName_userID_fkey";

-- DropForeignKey
ALTER TABLE "PerformedCardio" DROP CONSTRAINT "PerformedCardio_loggedWorkoutId_fkey";

-- DropForeignKey
ALTER TABLE "PerformedExercise" DROP CONSTRAINT "PerformedExercise_exerciseName_userID_fkey";

-- DropForeignKey
ALTER TABLE "PerformedExercise" DROP CONSTRAINT "PerformedExercise_loggedWorkoutId_fkey";

-- DropIndex
DROP INDEX "Exercise_userID_area_name_idx";

-- DropIndex
DROP INDEX "LoggedWorkout_userID_startedAt_idx";

-- AlterTable
ALTER TABLE "Cardio" DROP COLUMN "fatigue",
DROP COLUMN "muscleFatigue",
ADD COLUMN     "overallFatigue" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "DailyUpdate" DROP COLUMN "musclesInjury",
DROP COLUMN "musclesSore",
ALTER COLUMN "weight" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "fatigue",
DROP COLUMN "muscleFatigue",
DROP COLUMN "primary",
DROP COLUMN "secondary",
ADD COLUMN     "overallFatigue" INTEGER NOT NULL,
ADD COLUMN     "primaryMuscleName" TEXT NOT NULL,
ADD COLUMN     "symmetric" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "LoggedWorkout" DROP COLUMN "finishedAt",
ADD COLUMN     "order" INTEGER[];

-- DropTable
DROP TABLE "PerformedCardio";

-- DropTable
DROP TABLE "PerformedExercise";

-- DropEnum
DROP TYPE "Muscle";

-- CreateTable
CREATE TABLE "Muscle" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "area" "Area" NOT NULL,
    "isPrimaryFocus" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Muscle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerciseData" (
    "id" TEXT NOT NULL,
    "exerciseName" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "performedAt" TIMESTAMP(3) NOT NULL,
    "reps" INTEGER[],
    "symmetric" BOOLEAN NOT NULL DEFAULT true,
    "repsMore" INTEGER[],
    "weight" INTEGER[],
    "rest" INTEGER[],
    "effort" INTEGER NOT NULL,
    "suggestedReps" INTEGER[],
    "suggestedWeight" INTEGER[],
    "suggestedRest" INTEGER[],
    "loggedWorkoutId" TEXT NOT NULL,

    CONSTRAINT "ExerciseData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardioData" (
    "id" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "cardioName" TEXT NOT NULL,
    "performedAt" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER[],
    "distance" INTEGER[],
    "pace" INTEGER[],
    "rest" INTEGER[],
    "effort" INTEGER NOT NULL,
    "suggestedDuration" INTEGER[],
    "suggestedDistance" INTEGER[],
    "suggestedPace" INTEGER[],
    "suggestedRest" INTEGER[],
    "loggedWorkoutId" TEXT NOT NULL,

    CONSTRAINT "CardioData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_secondary" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_exerciseFatigue" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_cardioFatigue" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_musclesSore" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_musclesInjury" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "Muscle_userID_name_idx" ON "Muscle"("userID", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Muscle_userID_name_key" ON "Muscle"("userID", "name");

-- CreateIndex
CREATE INDEX "ExerciseData_userID_idx" ON "ExerciseData"("userID");

-- CreateIndex
CREATE INDEX "CardioData_userID_idx" ON "CardioData"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "_secondary_AB_unique" ON "_secondary"("A", "B");

-- CreateIndex
CREATE INDEX "_secondary_B_index" ON "_secondary"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_exerciseFatigue_AB_unique" ON "_exerciseFatigue"("A", "B");

-- CreateIndex
CREATE INDEX "_exerciseFatigue_B_index" ON "_exerciseFatigue"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_cardioFatigue_AB_unique" ON "_cardioFatigue"("A", "B");

-- CreateIndex
CREATE INDEX "_cardioFatigue_B_index" ON "_cardioFatigue"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_musclesSore_AB_unique" ON "_musclesSore"("A", "B");

-- CreateIndex
CREATE INDEX "_musclesSore_B_index" ON "_musclesSore"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_musclesInjury_AB_unique" ON "_musclesInjury"("A", "B");

-- CreateIndex
CREATE INDEX "_musclesInjury_B_index" ON "_musclesInjury"("B");

-- CreateIndex
CREATE INDEX "Exercise_userID_name_idx" ON "Exercise"("userID", "name");

-- CreateIndex
CREATE INDEX "LoggedWorkout_userID_workoutName_startedAt_idx" ON "LoggedWorkout"("userID", "workoutName", "startedAt");

-- AddForeignKey
ALTER TABLE "Muscle" ADD CONSTRAINT "Muscle_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_primaryMuscleName_userID_fkey" FOREIGN KEY ("primaryMuscleName", "userID") REFERENCES "Muscle"("name", "userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseData" ADD CONSTRAINT "ExerciseData_exerciseName_userID_fkey" FOREIGN KEY ("exerciseName", "userID") REFERENCES "Exercise"("name", "userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseData" ADD CONSTRAINT "ExerciseData_loggedWorkoutId_fkey" FOREIGN KEY ("loggedWorkoutId") REFERENCES "LoggedWorkout"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardioData" ADD CONSTRAINT "CardioData_cardioName_userID_fkey" FOREIGN KEY ("cardioName", "userID") REFERENCES "Cardio"("name", "userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardioData" ADD CONSTRAINT "CardioData_loggedWorkoutId_fkey" FOREIGN KEY ("loggedWorkoutId") REFERENCES "LoggedWorkout"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_secondary" ADD CONSTRAINT "_secondary_A_fkey" FOREIGN KEY ("A") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_secondary" ADD CONSTRAINT "_secondary_B_fkey" FOREIGN KEY ("B") REFERENCES "Muscle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_exerciseFatigue" ADD CONSTRAINT "_exerciseFatigue_A_fkey" FOREIGN KEY ("A") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_exerciseFatigue" ADD CONSTRAINT "_exerciseFatigue_B_fkey" FOREIGN KEY ("B") REFERENCES "Muscle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_cardioFatigue" ADD CONSTRAINT "_cardioFatigue_A_fkey" FOREIGN KEY ("A") REFERENCES "Cardio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_cardioFatigue" ADD CONSTRAINT "_cardioFatigue_B_fkey" FOREIGN KEY ("B") REFERENCES "Muscle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_musclesSore" ADD CONSTRAINT "_musclesSore_A_fkey" FOREIGN KEY ("A") REFERENCES "DailyUpdate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_musclesSore" ADD CONSTRAINT "_musclesSore_B_fkey" FOREIGN KEY ("B") REFERENCES "Muscle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_musclesInjury" ADD CONSTRAINT "_musclesInjury_A_fkey" FOREIGN KEY ("A") REFERENCES "DailyUpdate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_musclesInjury" ADD CONSTRAINT "_musclesInjury_B_fkey" FOREIGN KEY ("B") REFERENCES "Muscle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
