/*
  Warnings:

  - You are about to drop the column `priod` on the `contest` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `corporate_type` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `spcialization` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `end_period` to the `contest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_period` to the `contest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `contest` DROP COLUMN `priod`,
    ADD COLUMN `end_period` DATETIME(3) NOT NULL,
    ADD COLUMN `start_period` DATETIME(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `corporate_type_name_key` ON `corporate_type`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `spcialization_name_key` ON `spcialization`(`name`);
