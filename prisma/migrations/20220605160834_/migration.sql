/*
  Warnings:

  - Added the required column `name` to the `team` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `citizens_commentId_fkey` ON `citizens`;

-- AlterTable
ALTER TABLE `team` ADD COLUMN `name` CHAR(100) NOT NULL;
