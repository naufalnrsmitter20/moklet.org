/*
  Warnings:

  - You are about to drop the column `suborgan` on the `Organisasi` table. All the data in the column will be lost.
  - You are about to drop the column `suborgan_name` on the `Organisasi` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[organisasi,period_id]` on the table `Organisasi` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `organisasi` to the `Organisasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organisasi_name` to the `Organisasi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Organisasi` DROP COLUMN `suborgan`,
    DROP COLUMN `suborgan_name`,
    ADD COLUMN `organisasi` ENUM('OSIS', 'MPK', 'BDI', 'PALWAGA', 'PASKATEMA', 'TSBC', 'TSFC', 'TSVC', 'TSCC', 'PMR', 'MEMO', 'MAC', 'METIC', 'COMET') NOT NULL,
    ADD COLUMN `organisasi_name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Organisasi_organisasi_period_id_key` ON `Organisasi`(`organisasi`, `period_id`);
