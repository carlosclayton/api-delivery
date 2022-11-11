/*
  Warnings:

  - You are about to drop the column `item_name` on the `deliveries` table. All the data in the column will be lost.
  - Added the required column `driver_licence` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `item_names` to the `deliveries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `driver_licence` to the `deliverman` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `deliverman` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `clients` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `driver_licence` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER';

-- AlterTable
ALTER TABLE `deliveries` DROP COLUMN `item_name`,
    ADD COLUMN `item_names` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `deliverman` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `driver_licence` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER';
