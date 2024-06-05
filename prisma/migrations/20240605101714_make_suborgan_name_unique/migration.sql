/*
  Warnings:

  - A unique constraint covering the columns `[suborgan_name]` on the table `Suborgan` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Suborgan_suborgan_name_key` ON `Suborgan`(`suborgan_name`);
