/*
  Warnings:

  - Added the required column `structure` to the `Organisasi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Organisasi` ADD COLUMN `structure` LONGTEXT NOT NULL;
