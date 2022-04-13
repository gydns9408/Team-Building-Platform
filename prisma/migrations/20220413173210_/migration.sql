-- CreateTable
CREATE TABLE `corporate_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_contestTocorporate_type` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_contestTocorporate_type_AB_unique`(`A`, `B`),
    INDEX `_contestTocorporate_type_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_contestTocorporate_type` ADD FOREIGN KEY (`A`) REFERENCES `contest`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_contestTocorporate_type` ADD FOREIGN KEY (`B`) REFERENCES `corporate_type`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
