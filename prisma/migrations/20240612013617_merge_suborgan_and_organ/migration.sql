/*
  Warnings:

  - The primary key for the `Organisasi` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `organisasi_id` on the `Organisasi` table. All the data in the column will be lost.
  - You are about to drop the column `organisasi_name` on the `Organisasi` table. All the data in the column will be lost.
  - You are about to drop the column `periode_id` on the `Organisasi` table. All the data in the column will be lost.
  - You are about to drop the `Suborgan` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `period_id` to the `Organisasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `Organisasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suborgan` to the `Organisasi` table without a default value. This is not possible if the table is not empty.
  - The required column `suborgan_id` was added to the `Organisasi` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `suborgan_name` to the `Organisasi` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Organisasi` DROP FOREIGN KEY `Organisasi_periode_id_fkey`;

-- DropForeignKey
ALTER TABLE `Suborgan` DROP FOREIGN KEY `Suborgan_period_id_fkey`;

-- AlterTable
ALTER TABLE `Organisasi` DROP PRIMARY KEY,
    DROP COLUMN `organisasi_id`,
    DROP COLUMN `organisasi_name`,
    DROP COLUMN `periode_id`,
    ADD COLUMN `period_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `start_date` DATETIME(3) NOT NULL,
    ADD COLUMN `suborgan` ENUM('OSIS', 'MPK', 'BDI', 'PALWAGA', 'PASKATEMA', 'TSBC', 'TSFC', 'TSVC', 'TSCC', 'PMR', 'MEMO', 'MAC', 'METIC', 'COMET') NOT NULL,
    ADD COLUMN `suborgan_id` CHAR(36) NOT NULL,
    ADD COLUMN `suborgan_name` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`suborgan_id`);

-- DropTable
DROP TABLE `Suborgan`;

-- AddForeignKey
ALTER TABLE `Organisasi` ADD CONSTRAINT `Organisasi_period_id_fkey` FOREIGN KEY (`period_id`) REFERENCES `Period_Year`(`periode_year_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
