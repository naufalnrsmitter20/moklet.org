-- CreateTable
CREATE TABLE `Link_Shortener_Count` (
    `id` VARCHAR(50) NOT NULL,
    `click_count` INTEGER NOT NULL,

    UNIQUE INDEX `Link_Shortener_Count_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Link_Shortener_Count` ADD CONSTRAINT `Link_Shortener_Count_id_fkey` FOREIGN KEY (`id`) REFERENCES `Link_Shortener`(`slug`) ON DELETE CASCADE ON UPDATE CASCADE;
