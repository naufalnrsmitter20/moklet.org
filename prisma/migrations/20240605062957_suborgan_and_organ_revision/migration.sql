/*
  Warnings:

  - The primary key for the `Organisasi` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `kontak` on the `Organisasi` table. All the data in the column will be lost.
  - You are about to drop the column `misi` on the `Organisasi` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Organisasi` table. All the data in the column will be lost.
  - You are about to drop the column `struktur` on the `Organisasi` table. All the data in the column will be lost.
  - You are about to drop the column `sub_organ_id` on the `Organisasi` table. All the data in the column will be lost.
  - You are about to drop the column `visi` on the `Organisasi` table. All the data in the column will be lost.
  - You are about to drop the `Sub_Organ` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `companion` to the `Organisasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact` to the `Organisasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Organisasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mission` to the `Organisasi` table without a default value. This is not possible if the table is not empty.
  - The required column `organisasi_id` was added to the `Organisasi` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `organisasi_name` to the `Organisasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `periode_id` to the `Organisasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `structure` to the `Organisasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vision` to the `Organisasi` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Organisasi_name_key` ON `Organisasi`;

-- AlterTable
ALTER TABLE `Organisasi` DROP PRIMARY KEY,
    DROP COLUMN `kontak`,
    DROP COLUMN `misi`,
    DROP COLUMN `name`,
    DROP COLUMN `struktur`,
    DROP COLUMN `sub_organ_id`,
    DROP COLUMN `visi`,
    ADD COLUMN `companion` VARCHAR(191) NOT NULL,
    ADD COLUMN `contact` VARCHAR(191) NOT NULL,
    ADD COLUMN `image` VARCHAR(191) NOT NULL,
    ADD COLUMN `mission` VARCHAR(191) NOT NULL,
    ADD COLUMN `organisasi_id` CHAR(36) NOT NULL,
    ADD COLUMN `organisasi_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `periode_id` CHAR(36) NOT NULL,
    ADD COLUMN `structure` LONGTEXT NOT NULL,
    ADD COLUMN `vision` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`organisasi_id`);

-- DropTable
DROP TABLE `Sub_Organ`;

-- CreateTable
CREATE TABLE `Period_Year` (
    `periode_year_id` CHAR(36) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `period` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Period_Year_period_key`(`period`),
    PRIMARY KEY (`periode_year_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Suborgan` (
    `suborgan_id` CHAR(36) NOT NULL,
    `period_id` VARCHAR(191) NOT NULL,
    `suborgan` ENUM('OSIS', 'MPK', 'BDI', 'PALWAGA', 'PASKATEMA', 'TSBC', 'TSFC', 'TSVC', 'TSCC', 'PMR', 'MEMO', 'MAC', 'METIC', 'COMET') NOT NULL,
    `suborgan_name` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `vision` VARCHAR(191) NOT NULL,
    `mission` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `companion` VARCHAR(191) NOT NULL,
    `structure` LONGTEXT NOT NULL,
    `contact` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`suborgan_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Suborgan` ADD CONSTRAINT `Suborgan_period_id_fkey` FOREIGN KEY (`period_id`) REFERENCES `Period_Year`(`periode_year_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Organisasi` ADD CONSTRAINT `Organisasi_periode_id_fkey` FOREIGN KEY (`periode_id`) REFERENCES `Period_Year`(`periode_year_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
