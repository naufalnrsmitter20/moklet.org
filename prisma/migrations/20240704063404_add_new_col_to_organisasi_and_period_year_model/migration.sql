/*
  Warnings:

  - The primary key for the `_PostToTag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[A,B]` on the table `_PostToTag` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `is_suborgan` to the `Organisasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_active` to the `Period_Year` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Organisasi` ADD COLUMN `is_suborgan` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `Period_Year` ADD COLUMN `is_active` BOOLEAN NOT NULL;
