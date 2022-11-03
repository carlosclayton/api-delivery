-- DropForeignKey
ALTER TABLE `deliveries` DROP FOREIGN KEY `deliveries_deliverman_id_fkey`;

-- AlterTable
ALTER TABLE `deliveries` MODIFY `deliverman_id` VARCHAR(191) NULL,
    MODIFY `end_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `deliveries` ADD CONSTRAINT `deliveries_deliverman_id_fkey` FOREIGN KEY (`deliverman_id`) REFERENCES `deliverman`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
