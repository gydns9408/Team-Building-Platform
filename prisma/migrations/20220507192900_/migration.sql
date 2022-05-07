/*
  Warnings:

  - You are about to drop the column `authority_name` on the `authority` table. All the data in the column will be lost.
  - You are about to drop the column `certificate_name` on the `certification` table. All the data in the column will be lost.
  - You are about to drop the column `classification_name` on the `classification` table. All the data in the column will be lost.
  - You are about to drop the column `contest_name` on the `contest` table. All the data in the column will be lost.
  - You are about to drop the column `corporate_name` on the `corporate_type` table. All the data in the column will be lost.
  - You are about to drop the column `profession_name` on the `professtion` table. All the data in the column will be lost.
  - You are about to drop the column `program_name` on the `program` table. All the data in the column will be lost.
  - You are about to drop the column `role_name` on the `role` table. All the data in the column will be lost.
  - You are about to drop the column `sns_name` on the `sns` table. All the data in the column will be lost.
  - You are about to drop the column `tag_name` on the `tag` table. All the data in the column will be lost.
  - You are about to drop the column `tech_stack_name` on the `tech_stack` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `authority` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `certification` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `classification` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `corporate_type` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `professtion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `program` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `role` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `sns` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `tag` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `tech_stack` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `authority` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `certification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `classification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `contest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `corporate_type` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `professtion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `sns` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `tag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `tech_stack` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `authority_authority_name_key` ON `authority`;

-- DropIndex
DROP INDEX `certification_certificate_name_key` ON `certification`;

-- DropIndex
DROP INDEX `classification_classification_name_key` ON `classification`;

-- DropIndex
DROP INDEX `corporate_type_corporate_name_key` ON `corporate_type`;

-- DropIndex
DROP INDEX `professtion_profession_name_key` ON `professtion`;

-- DropIndex
DROP INDEX `program_program_name_key` ON `program`;

-- DropIndex
DROP INDEX `role_role_name_key` ON `role`;

-- DropIndex
DROP INDEX `sns_sns_name_key` ON `sns`;

-- DropIndex
DROP INDEX `tag_tag_name_key` ON `tag`;

-- DropIndex
DROP INDEX `tech_stack_tech_stack_name_key` ON `tech_stack`;

-- AlterTable
ALTER TABLE `authority` DROP COLUMN `authority_name`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `certification` DROP COLUMN `certificate_name`,
    ADD COLUMN `name` CHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `classification` DROP COLUMN `classification_name`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `contest` DROP COLUMN `contest_name`,
    ADD COLUMN `name` CHAR(200) NOT NULL;

-- AlterTable
ALTER TABLE `corporate_type` DROP COLUMN `corporate_name`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `professtion` DROP COLUMN `profession_name`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `program` DROP COLUMN `program_name`,
    ADD COLUMN `name` CHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `role` DROP COLUMN `role_name`,
    ADD COLUMN `name` CHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `sns` DROP COLUMN `sns_name`,
    ADD COLUMN `name` CHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `tag` DROP COLUMN `tag_name`,
    ADD COLUMN `name` CHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `tech_stack` DROP COLUMN `tech_stack_name`,
    ADD COLUMN `name` CHAR(50) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `authority_name_key` ON `authority`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `certification_name_key` ON `certification`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `classification_name_key` ON `classification`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `corporate_type_name_key` ON `corporate_type`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `professtion_name_key` ON `professtion`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `program_name_key` ON `program`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `role_name_key` ON `role`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `sns_name_key` ON `sns`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `tag_name_key` ON `tag`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `tech_stack_name_key` ON `tech_stack`(`name`);
