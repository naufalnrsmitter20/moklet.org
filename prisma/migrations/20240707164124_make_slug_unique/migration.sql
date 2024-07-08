/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Twibbon` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Twibbon_slug_key` ON `Twibbon`(`slug`);
