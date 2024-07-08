-- CreateTable
CREATE TABLE `Twibbon` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `frame_url` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `color_key` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `type` ENUM('PHOTO', 'VIDEO') NOT NULL DEFAULT 'PHOTO',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Twibbon` ADD CONSTRAINT `Twibbon_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
