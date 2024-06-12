/*
  Warnings:

  - Added the required column `image_description` to the `Organisasi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Organisasi` ADD COLUMN `image_description` VARCHAR(191) NOT NULL;
