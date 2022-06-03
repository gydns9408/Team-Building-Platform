-- AlterTable
ALTER TABLE `citizens` ADD COLUMN `commentId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `citizens` ADD CONSTRAINT `citizens_commentId_fkey` FOREIGN KEY (`commentId`) REFERENCES `comment`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
