-- CreateTable
CREATE TABLE `Sub_Organ` (
    `sub_organ_id` CHAR(36) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `visi` VARCHAR(191) NOT NULL,
    `misi` VARCHAR(191) NOT NULL,
    `kontak` VARCHAR(191) NOT NULL,
    `struktur` VARCHAR(191) NOT NULL,
    `kategori` ENUM('KEOLAHRAGAAN', 'KEAGAMAAN', 'SENI_BAHASA') NOT NULL,

    UNIQUE INDEX `Sub_Organ_name_key`(`name`),
    PRIMARY KEY (`sub_organ_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Organisasi` (
    `sub_organ_id` CHAR(36) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `visi` VARCHAR(191) NOT NULL,
    `misi` VARCHAR(191) NOT NULL,
    `kontak` VARCHAR(191) NOT NULL,
    `struktur` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Organisasi_name_key`(`name`),
    PRIMARY KEY (`sub_organ_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
