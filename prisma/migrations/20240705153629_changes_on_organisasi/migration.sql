/*
  Warnings:

  - You are about to drop the column `structure` on the `Organisasi` table. All the data in the column will be lost.
  - The primary key for the `_PostToTag` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `Organisasi` DROP COLUMN `structure`,
    MODIFY `organisasi` ENUM('OSIS', 'MPK', 'BDI', 'PALWAGA', 'PASKATEMA', 'TSBC', 'TSFC', 'TSVC', 'TSCC', 'PMR', 'MEMO', 'MAC', 'METIC', 'COMET', 'PUSTEL') NOT NULL;

-- AlterTable
ALTER TABLE `Period_Year` MODIFY `is_active` BOOLEAN NOT NULL DEFAULT false;
