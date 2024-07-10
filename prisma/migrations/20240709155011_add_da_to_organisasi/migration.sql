-- AlterTable
ALTER TABLE `Organisasi` MODIFY `organisasi` ENUM('OSIS', 'MPK', 'BDI', 'PALWAGA', 'PASKATEMA', 'TSBC', 'TSFC', 'TSVC', 'TSCC', 'PMR', 'MEMO', 'MAC', 'METIC', 'COMET', 'PUSTEL', 'DA') NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `role` ENUM('SuperAdmin', 'Admin', 'OSIS', 'MPK', 'BDI', 'PALWAGA', 'PASKATEMA', 'TSBC', 'TSFC', 'TSVC', 'TSCC', 'PMR', 'MEMO', 'MAC', 'METIC', 'COMET', 'DA', 'Guest') NOT NULL DEFAULT 'Guest';
