-- CreateTable
CREATE TABLE `es_table` (
    `id` BIGINT UNSIGNED NOT NULL,
    `client_name` VARCHAR(32) NOT NULL,
    `modification_time` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `insertion_time` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `unique_id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
