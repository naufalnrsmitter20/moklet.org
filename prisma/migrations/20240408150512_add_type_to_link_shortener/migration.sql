-- AlterTable
ALTER TABLE `Link_Shortener` ADD COLUMN `type` ENUM('User', 'System') NOT NULL DEFAULT 'User';
