-- CreateEnum
CREATE TYPE "Area" AS ENUM ('PUSH', 'PULL', 'LEGS', 'CORE', 'OTHER');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'FREE', 'PAID', 'INACTIVE');

-- CreateEnum
CREATE TYPE "Muscle" AS ENUM ('BICEPS', 'BRACHIORADIALIS', 'FOREARM_FLEXORS', 'FOREARM_EXTENSORS', 'TRICEPS', 'GRIP', 'OBLIQUES', 'CORE', 'UPPER_CHEST', 'MIDDLE_CHEST', 'LOWER_CHEST', 'SERRATUS_ANTERIOR', 'FRONT_DELT', 'MIDDLE_DELT', 'REAR_DELT', 'TRAPS', 'UPPER_BACK', 'MIDDLE_BACK', 'LOWER_BACK', 'LATS', 'INNER_CALVES', 'OUTER_CALVES', 'TIBIALIS_ANTERIOR', 'ANKLES', 'QUADS', 'HAMSTRINGS', 'GLUTES', 'USER_A', 'USER_B', 'USER_C', 'USER_D', 'USER_E');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "joined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" "Role" NOT NULL DEFAULT 'FREE',
    "weight_lb" INTEGER NOT NULL,
    "height_cm" INTEGER NOT NULL,
    "emailUpdates" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userID" TEXT NOT NULL,
    "area" "Area" NOT NULL,
    "primary" "Muscle"[],
    "secondary" "Muscle"[],
    "calisthenics" BOOLEAN NOT NULL DEFAULT false,
    "fatigue" INTEGER NOT NULL,
    "muscleFatigue" "Muscle"[],

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cardio" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userID" TEXT NOT NULL,
    "fatigue" INTEGER NOT NULL,
    "muscleFatigue" "Muscle"[],

    CONSTRAINT "Cardio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workout" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userID" TEXT NOT NULL,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PerformedExercise" (
    "id" TEXT NOT NULL,
    "exerciseName" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "performedAt" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER[],
    "distance" INTEGER[],
    "pace" INTEGER[],
    "rest" INTEGER[],
    "effort" INTEGER NOT NULL,
    "loggedWorkoutId" TEXT NOT NULL,

    CONSTRAINT "PerformedExercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PerformedCardio" (
    "id" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "cardioName" TEXT NOT NULL,
    "performedAt" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER[],
    "distance" INTEGER[],
    "pace" INTEGER[],
    "rest" INTEGER[],
    "effort" INTEGER NOT NULL,
    "loggedWorkoutId" TEXT NOT NULL,

    CONSTRAINT "PerformedCardio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoggedWorkout" (
    "id" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "workoutName" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "finishedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LoggedWorkout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Update" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userID" TEXT NOT NULL,
    "musclesSoreness" "Muscle"[],
    "soreness" INTEGER[],
    "musclesInjury" "Muscle"[],
    "injurySeverity" INTEGER[],

    CONSTRAINT "Update_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ExerciseToWorkout" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CardioToWorkout" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "Exercise_userID_area_name_idx" ON "Exercise"("userID", "area", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_userID_name_key" ON "Exercise"("userID", "name");

-- CreateIndex
CREATE INDEX "Cardio_userID_name_idx" ON "Cardio"("userID", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Cardio_userID_name_key" ON "Cardio"("userID", "name");

-- CreateIndex
CREATE INDEX "Workout_userID_name_idx" ON "Workout"("userID", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Workout_userID_name_key" ON "Workout"("userID", "name");

-- CreateIndex
CREATE INDEX "PerformedExercise_userID_performedAt_idx" ON "PerformedExercise"("userID", "performedAt");

-- CreateIndex
CREATE INDEX "PerformedCardio_userID_performedAt_idx" ON "PerformedCardio"("userID", "performedAt");

-- CreateIndex
CREATE INDEX "LoggedWorkout_userID_startedAt_idx" ON "LoggedWorkout"("userID", "startedAt");

-- CreateIndex
CREATE INDEX "Update_userID_createdAt_idx" ON "Update"("userID", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "_ExerciseToWorkout_AB_unique" ON "_ExerciseToWorkout"("A", "B");

-- CreateIndex
CREATE INDEX "_ExerciseToWorkout_B_index" ON "_ExerciseToWorkout"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CardioToWorkout_AB_unique" ON "_CardioToWorkout"("A", "B");

-- CreateIndex
CREATE INDEX "_CardioToWorkout_B_index" ON "_CardioToWorkout"("B");

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cardio" ADD CONSTRAINT "Cardio_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerformedExercise" ADD CONSTRAINT "PerformedExercise_exerciseName_userID_fkey" FOREIGN KEY ("exerciseName", "userID") REFERENCES "Exercise"("name", "userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerformedExercise" ADD CONSTRAINT "PerformedExercise_loggedWorkoutId_fkey" FOREIGN KEY ("loggedWorkoutId") REFERENCES "LoggedWorkout"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerformedCardio" ADD CONSTRAINT "PerformedCardio_cardioName_userID_fkey" FOREIGN KEY ("cardioName", "userID") REFERENCES "Cardio"("name", "userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerformedCardio" ADD CONSTRAINT "PerformedCardio_loggedWorkoutId_fkey" FOREIGN KEY ("loggedWorkoutId") REFERENCES "LoggedWorkout"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoggedWorkout" ADD CONSTRAINT "LoggedWorkout_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoggedWorkout" ADD CONSTRAINT "LoggedWorkout_workoutName_userID_fkey" FOREIGN KEY ("workoutName", "userID") REFERENCES "Workout"("name", "userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Update" ADD CONSTRAINT "Update_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExerciseToWorkout" ADD CONSTRAINT "_ExerciseToWorkout_A_fkey" FOREIGN KEY ("A") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExerciseToWorkout" ADD CONSTRAINT "_ExerciseToWorkout_B_fkey" FOREIGN KEY ("B") REFERENCES "Workout"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardioToWorkout" ADD CONSTRAINT "_CardioToWorkout_A_fkey" FOREIGN KEY ("A") REFERENCES "Cardio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardioToWorkout" ADD CONSTRAINT "_CardioToWorkout_B_fkey" FOREIGN KEY ("B") REFERENCES "Workout"("id") ON DELETE CASCADE ON UPDATE CASCADE;
