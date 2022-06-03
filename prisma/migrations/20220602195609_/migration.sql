-- DropForeignKey
ALTER TABLE `citizens` DROP FOREIGN KEY `citizens_commentId_fkey`;

-- CreateTable
CREATE TABLE `_CitizensToComment` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CitizensToComment_AB_unique`(`A`, `B`),
    INDEX `_CitizensToComment_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CitizensToComment` ADD CONSTRAINT `_CitizensToComment_A_fkey` FOREIGN KEY (`A`) REFERENCES `citizens`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CitizensToComment` ADD CONSTRAINT `_CitizensToComment_B_fkey` FOREIGN KEY (`B`) REFERENCES `comment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
