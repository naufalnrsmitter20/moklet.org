/*
  Warnings:

  - Added the required column `updated_at` to the `Organisasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Sub_Organ` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Organisasi` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Sub_Organ` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;
