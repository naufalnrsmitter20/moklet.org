/*
  Warnings:

  - You are about to drop the column `start_date` on the `Period_Year` table. All the data in the column will be lost.
  - Added the required column `start_date` to the `Suborgan` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Suborgan_suborgan_name_key` ON `Suborgan`;

-- AlterTable
ALTER TABLE `Period_Year` DROP COLUMN `start_date`;

-- AlterTable
ALTER TABLE `Suborgan` ADD COLUMN `start_date` DATETIME(3) NOT NULL;
