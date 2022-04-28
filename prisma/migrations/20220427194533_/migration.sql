/*
  Warnings:

  - You are about to drop the column `name` on the `certificate` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `corporate_type` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `program` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `skill_stack` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `sns` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `spcialization` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[corporate_name]` on the table `corporate_type` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[spcialization_name]` on the table `spcialization` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `certificate_name` to the `certificate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `corporate_name` to the `corporate_type` table without a default value. This is not possible if the table is not empty.
  - Added the required column `program_name` to the `program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skill_stack_name` to the `skill_stack` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sns_name` to the `sns` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spcialization_name` to the `spcialization` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `corporate_type_name_key` ON `corporate_type`;

-- DropIndex
DROP INDEX `spcialization_name_key` ON `spcialization`;

-- AlterTable
ALTER TABLE `certificate` DROP COLUMN `name`,
    ADD COLUMN `certificate_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `corporate_type` DROP COLUMN `name`,
    ADD COLUMN `corporate_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `program` DROP COLUMN `name`,
    ADD COLUMN `program_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `skill_stack` DROP COLUMN `name`,
    ADD COLUMN `skill_stack_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `sns` DROP COLUMN `name`,
    ADD COLUMN `sns_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `spcialization` DROP COLUMN `name`,
    ADD COLUMN `spcialization_name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `corporate_type_corporate_name_key` ON `corporate_type`(`corporate_name`);

-- CreateIndex
CREATE UNIQUE INDEX `spcialization_spcialization_name_key` ON `spcialization`(`spcialization_name`);
